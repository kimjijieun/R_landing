$(function(){


  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  
  
  /* lenis 스크롤 스무스 */
  // const lenis = new Lenis();
  
  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });
  
  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }
  
  // requestAnimationFrame(raf);
  // lenis.stop();
  
  // $(function () {
  //   $("html, body").animate({ scrollTop: 0 }, "slow");
  // });
  
  
  // lenis
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0) //지연 완화 기능을 비활성화, 즉각반응
  lenis.scrollTo(0) //페이지 로드 시 스크롤 위치를 맨 위로 초기화
  lenis.stop();

    $(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  
  
  const introTl = gsap.timeline();
  const MintroTl = gsap.timeline();

  ScrollTrigger.matchMedia({
    "(max-width:767px)":function(){
      gsap.set(".m-logo-text .port", {
        opacity:0,
        x:-10,
        y:-100,
      });
      gsap.set(".m-logo-text .folio", {
        opacity:0,
        x:10,
        y:100,
      });

      MintroTl
      .addLabel('m_a')
      .to(".m-logo-text",{
        opacity:1,
      })
      .to(".m-logo-text .port",{
        opacity:1,
        x:0
      },"m_a")
      .to(".m-logo-text .folio", {
        opacity:1,
        x:0
      },"m_a")

      .addLabel('m_b')
      .to(".m-logo-text .port",{
        y:0,
        duration: 1,
        ease: "expo.inOut",
      },"m_b")
      .to(".info-txt",{
        opacity:0,
        duration: 1,
      },"m_b")
      .to(".m-logo-text .folio", {
        y:0,
        duration: 1,
        ease: "expo.inOut",
      },"m_b")

      .addLabel('m_c')
      .to(".m-logo-text",{
        y:-200,
        duration: 1,
        ease: "expo.inOut",
      },"m_c")

      .to(".loding-page",{
        height: "0%",
        duration: 1,
        ease: "expo.inOut",
        onComplete: function () {
          lenis.start(); //.다 끝나고 스크롤 시작
        },
      },"m_c");

      // gsap.to(".m-logo-text", {
      //   opacity:0,
      //   ease: "power1.inOut",
      //   scrollTrigger: {
      //     trigger: ".sc-intro",
      //     start: "center 45%",
      //     end: "60% 45%",
      //     scrub: 1,
      //     invalidateOnRefresh: true,
      //   },
      // });
      ScrollTrigger.create({
        trigger: ".sc-intro",
        start: "center 45%",
        onEnter: () => {
          gsap.to(".m-logo-text", {
            opacity:0,
          });
        },
        onEnterBack: () => {
          gsap.to(".m-logo-text", {
              opacity: 1,
          });
      },
        invalidateOnRefresh: true,
      });
    },
    "(min-width:768px)":function(){

      introTl
      .addLabel('a')
      .to(".logo-text", {
        delay: 0.2,
        duration: 1,
        opacity: 1,
      })
      .to(".logo-text .t", {
        x: 0,
        duration: 1,
        ease: "expo.inOut",
      }, 'a')
      .to(".logo-text .fo", {
        x: 0,
        duration: 1,
        ease: "expo.inOut",
      }, 'a')
  
      .addLabel('b')
      .to(".logo-text .fo", {
        y: 0,
        duration: 1,
        // delay:0.5,
        ease: "expo.inOut",
      }, 'b')
      .to(".logo-text .lio", {
        y: 0,
        duration: 1,
        // delay:0.5,
        ease: "expo.inOut",
      }, 'b')
  
      .to(".info-txt",{
        opacity:0
      },'b')
  
      .to(".loding-page",{
        height: "0%",
        duration: 1,
        ease: "expo.inOut",
        zIndex: "99",
        onComplete: function () {
          lenis.start(); //.loding-page가 끝나고 스크롤 시작
        },
      },'b')

      gsap.to(".logo-text", {
        opacity: 0,
        ease: "none",
        scale: 0,
        scrollTrigger: {
          trigger: ".sc-intro",
          start: "top top",
          end: "center top",
          scrub: 1,
          // markers:true,
        },
      });
    }
  });

  // ScrollTrigger.matchMedia({
  //   "(max-width:767px)": function () {
  //     gsap.to(".m-logo-text", {
  //       opacity:0,
  //       ease: "power1.inOut",
  //       scrollTrigger: {
  //         trigger: ".loding-page",
  //         start: "center 45%",
  //         end: "60% 45%",
  //         scrub: 1,
  //       }
  //     });
  //   }
  // });
  
  
  // // 해당영역으로 이동
  $('.header .link-nav').click(function(e){
      e.preventDefault();
  
      target = $(this).data('target')
      gsap.to(window, {duration: 1, scrollTo:target});
  
      // gsap.to(window, { duration: 2, scrollTo: { y: "#a", offsetY: 50 } });
  });

  
  // 첫 번째 애니메이션: .work-tit
  gsap.fromTo('.work-wrap .work-tit,.work-tit2, .work-wrap .work-desc',{
    y: 50,
    opacity: 0,
  },{
    y: 0,
    opacity: 1,
    stagger:0.1,
    // scrub:1,
    scrollTrigger: {
      trigger: '.sc-about .work-wrap',
      start: '30% 70%',
      end: '60% top',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });




  // 라인
  gsap.utils.toArray(".sc-title .line").forEach((item) => {
    gsap.to(item, {
      height: "100%",
      ease: "none",
      duration: 5,
  
      scrollTrigger: {
        trigger: item,  
        start: "0% 70%",
        end: "0% 70%",
        scrub: 1,
        // markers: true,
      },
    });
  });


  //Text split
  const targets = gsap.utils.toArray(".sc-title .t-title");

  targets.forEach(target => {
    let SplitClient = new SplitType(target, { type: "lines, words, chars" }); //줄, 단어, 문자 단위로 분할
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;

    gsap.from(chars, {
      yPercent: 100, // 문자가 아래에서 위로
      autoAlpha: 0, // 점차 나타나게
      duration: 1, // 애니메이션 1초동안
      ease: "circ.out", // 곡선 형태로 부드럽게 조정
      stagger: {
        amount: 1,
        // from: "random"
      },
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        end: "+=400",
        // markers: true,
        scrub: 1,
      }
    });
  });
  
  
  /* work 슬라이드 */
  ScrollTrigger.matchMedia({
    "(max-width: 1023px)": function () {
      gsap.utils.toArray(".item_box .item").forEach((item) => {
        gsap.set(item, {
          scale: 1.2,
          yPercent: -5,
        });

        gsap.to(item, {
          scale: 1,
          yPercent: 0,
          scrollTrigger: {
            //상위 요소에 따라 애니메이션을 조정해야 할 때.
            trigger: item.closest(".m-photo .item_box"),
            start: "0% center",
            end: "100% 30%",
            // markers: true,
            scrub: 1,
          },
        });
      });

      gsap.utils.toArray(".mItem .p-title").forEach((mTitle) => {
        gsap.set(mTitle, {
          x: 30,
          opacity: 0,
        });
      
        gsap.to(mTitle, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: mTitle.closest(".mItem .p-title"),
            start: "top 80%",
            end: "top 80%",
            // markers: true,
            // scrub: 1,
            toggleActions: "play none none reverse",
            onLeaveBack: () => {
              gsap.to(mTitle, {
                x: 30,
                opacity: 0,
                duration: 0.5,
              });
            },
          },
        });
      });
    },

    "(min-width:1024px)": function () {
    slideImg = gsap.timeline({
        scrollTrigger: {
        trigger: ".sc-project .common-inner",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
        },
    });
    
    slideImg

    .addLabel('a')
    .fromTo(
      ".sc-project .project-wrap .project-item:nth-child(1)",
      { height: "100%", filter: "blur(0px) brightness(1)" }, // 초기값
      { height: "30%", filter: "blur(2px) brightness(0.65)", duration: 0.5, ease: "power1.inOut" },
      'a'
    )
    .to(".sc-project .project-wrap .project-item:nth-child(1)", {
      filter: "blur(2px) brightness(0.65)",
      ease: "linear",
      duration: 0.5,
    }, 'a+=0.3')
    .to(".sc-project .project-wrap .project-item:nth-child(1)", {
      height: 0,
      filter: "blur(2px) brightness(0.65)",
      ease: "linear",
      duration: 0.5,
    }, 'a+=0.4')
    .to(".sc-project .title-list .title-item", { yPercent: -100 }, 'a+=0.5')

    .addLabel('b')
    .fromTo(
      ".sc-project .project-wrap .project-item:nth-child(2)",
      { height: "100%", filter: "blur(0px) brightness(1)" }, // 초기값
      { height: "30%", filter: "blur(2px) brightness(0.65)", duration: 0.5, ease: "power1.inOut" },
      'b'
    )
    .to(".sc-project .project-wrap .project-item:nth-child(2)", {
      filter: "blur(2px) brightness(0.65)",
      ease: "linear",
      duration: 0.5,
    }, 'b+=0.3')
    .to(".sc-project .project-wrap .project-item:nth-child(2)", {
      height: 0,
      filter: "blur(2px) brightness(0.65)",
      ease: "linear",
      duration: 0.5,
    }, 'b+=0.4')
    .to(".sc-project .title-list .title-item", { yPercent: -200 }, 'b+=0.5')

    .addLabel('c')
    .fromTo(
      ".sc-project .project-wrap .project-item:nth-child(3)",
      { height: "100%", filter: "blur(0px) brightness(1)" }, // 초기값
      { height: "30%", filter: "blur(2px) brightness(0.65)", duration: 0.5, ease: "power1.inOut" },
      'c'
    )
    .to(".sc-project .project-wrap .project-item:nth-child(3)", {
      filter: "blur(2px) brightness(0.65)",
      ease: "linear",
      duration: 0.5,
    }, 'c+=0.3')
    .to(".sc-project .project-wrap .project-item:nth-child(3)", {
      height: 0,
      filter: "blur(2px) brightness(0.65)",
      ease: "linear",
      duration: 0.5,
    }, 'c+=0.4')
    .to(".sc-project .title-list .title-item", { yPercent: -300 }, 'c+=0.5')

    }
  });
  

  
  
  // 헤더 스크롤
  ScrollTrigger.matchMedia({
    "(max-width:1023px)":function(){
      // 비활성화
      $(window).off("scroll.headerFade");
    },
    "(min-width:1024px)": function(){
      
      let lastScroll = 0;
      let isInProjectArea = false; // project-area에 들어갔는지 여부를 추적
      
      $(window).on("scroll.headerFade", function () {
        const curr = $(this).scrollTop();
        const projectAreaOffset = $(".project-area").offset().top;
        const projectAreaHeight = $(".project-area").outerHeight();
        const projectAreaEnd = projectAreaOffset + projectAreaHeight; // .project-area의 하단 위치
      
        if (curr >= projectAreaOffset && curr <= projectAreaEnd) {
          if (!isInProjectArea) {
            $(".header").fadeOut();
            isInProjectArea = true; // .project-area 내부로 상태 갱신
          }
        } else {
          if (isInProjectArea) {
            $(".header").fadeIn();
            isInProjectArea = false;
          }
        }
        lastScroll = curr;
      });
    }
  })

  
  
  const menuTl = gsap.timeline({
    paused:true,
    invalidateOnRefresh: true,
  });
  
  // menuTl.clear();
  menuTl
    .to('.menu-wrap', { yPercent: '100' })
    .to('.menu-wrap .menu-item a', { translateY: 0, stagger: 0.1, duration: 0.2 , delay: 0.1,opacity:1})
    .to('.menu-wrap .social-list .social-item', { y: '0', delay: 0.1 });
  
  
  $('.btn-menu').click(function(){
      $('.btn-menu').toggleClass('active');
      // $('body').toggleClass('hidden')
  
      if ($(this).hasClass('active')) {
        lenis.stop();

        $('body').addClass('hidden')
        menuTl.play()
      } else {
        lenis.start();
        $('body').removeClass('hidden')
        menuTl.reverse()
      }
  })
  
  $('.menu-wrap .menu-item a').click(function(){
    $('.btn-menu').removeClass('on, active')
    $('body').removeClass('hidden')
    menuTl.reverse()
    lenis.start();
  })

  // 메뉴 이동
  $('.nav-area a').click(function(e){
    e.preventDefault();
    $('html,body').scrollTop($($(this).attr('href')).offset().top)
    // gsap.to(window, {
    //   duration: 1,
    //   scrollTo: $($(this).attr('href')).offset().top
    // });
  })
  
  $('.btn-contact').click(function(){
    $('html,body').scrollTop($(document).height());
    // gsap.to(window, {duration: 1, scrollTo:$(document).height()});
  })
  
  
  const subProjectItems = document.querySelectorAll('.content-item');
  
  
  // 하나씩 순차적으로 애니메이션 적용하는 함수
  subProjectItems.forEach((item, index) => {
    gsap.from(item, {
      y: 120,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item, 
        start: 'top 80%',
        end: '150% 0%',
        scrub: true, 
        toggleActions: 'play none none none',
      //   markers: true,
      }
    });
  });
  
  
  let sliderItem = $('.slider-item');
  let sliderItemWidth = sliderItem.width();
  
  
  
  let horiAni = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-learn",
      start:"0% 0%",
      end:"100% 0%",  
      scrub:0.3,
      pin:true,
      invalidateOnRefresh: true,
      // markers: true,
    },
  })
  horiAni
  .to('.sc-learn .slider-list',{
    xPercent:-100,
    x:()=>{
      return window.innerWidth;
    },
    ease: "none", // <-- IMPORTANT!
  })
  
  const planList = document.querySelectorAll('.sc-learn .slider-item')
  planList.forEach(element => {
    gsap.from(element, {
      opacity:0,
      yPercent:10,
      scrollTrigger: {
        trigger: element,
        containerAnimation:horiAni,
        start: "0% 100%",
        end: "20% 70%",
        scrub: 1,
      }
    });
  });
  
  var previousWidth = $(window).width();
  var previousHeight = $(window).height();
  let workHeight = $('.sc-about').outerHeight(); // 초기 높이 설정
  
  // 창 크기 변화 감지 이벤트
  $(window).resize(function () {
      // 현재 창 크기
      var currentWidth = $(window).width();
      var currentHeight = $(window).height();
      workHeight = $('.sc-about').outerHeight();
  
      if (currentWidth !== previousWidth || currentHeight !== previousHeight) {
          setTimeout(() => {
              ScrollTrigger.refresh();
          }, 400);
  
          // 이전 크기 업데이트
          previousWidth = currentWidth;
          previousHeight = currentHeight;
      }

      if ($(window).width() > 768){
        // 기존 이벤트 제거 (중복 등록 방지)
        $('.btn, .btn-txt').off('mousemove mouseleave');

        $('.btn, .btn-txt ').mousemove(function(e){
  
          var x = ((-$(this).width() / 2) + e.offsetX) * 0.4;
          var y = ((-$(this).height() / 2) + e.offsetY) * 0.4;
        
          gsap.to($(this),1.5, {
              // transform:"translate3D(" + x + "px," + y + "px, 0)",
              x: x, 
              y: y,
              ease: Elastic.easeOut,
          })
        })
        
        $('.btn, .btn-txt ').mouseleave(function(){
          gsap.to($(this),1.5, {
              // transform:"translate3D(0, 0, 0)",
              x: 0,
              y: 0,
              ease: Elastic.easeOut.config(1, 0.1)
          })
        })
      } else{
        $('.btn, .btn-txt').off('mousemove mouseleave');
      }
      
  });
  
  $(window).on('scroll', function (){
    curr = $(this).scrollTop();

    if (curr > workHeight) {
      gsap.to('.btn-menu', {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
        $('.header .logo-wrap').addClass('on');
    } else {
      gsap.to('.btn-menu', {
        scale: 0,
        duration: 0.5,
        ease: "power2.out"
      });
        $('.header .logo-wrap').removeClass('on');
    }
  })
  
  // 호버이벤트
  $(document).mousemove(function (e) {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    xVal = e.clientX;
    yVal = e.clientY;
    gsap.to(".cursor", {
      x:xVal,
      y:yVal,
      stagger: 0.1,
    });
  });
  
  $(".project-area .project-item .con-img-box,.project-area .video-box").hover(
    function () {
      $(".cursor").addClass("on");
    },
    function () {
      $(".cursor").removeClass("on");
    }
  );

});