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
  // lenis.stop();
  
  const introTl = gsap.timeline();
  ScrollTrigger.matchMedia({
    "(min-width:767px)":function(){
      introTl
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
        onComplete: function () {
          lenis.start(); //.loding-page가 끝나고 스크롤 시작
        },
      },'b')
    }
  });
  
  // 스크롤 로고
  gsap.to(".logo-text", {
    opacity: 0,
    ease: "none",
    scale: 0,
    scrollTrigger: {
      trigger: ".logo-text",
      start: "top top",
      end: "center top",
      scrub: 2,
      // markers:true,
    },
  })
  // ScrollTrigger.matchMedia({
  // });
  
  
  
  
  // // 해당영역으로 이동
  $('.header .link-nav').click(function(e){
      e.preventDefault();
  
      target = $(this).data('target')
      gsap.to(window, {duration: 1, scrollTo:target});
  
      // gsap.to(window, { duration: 2, scrollTo: { y: "#a", offsetY: 50 } });
  });
  
  
  
  /* soto 슬라이드 */
  ScrollTrigger.matchMedia({
      "(min-width:1024px)": function () {
      slideImg = gsap.timeline({
          scrollTrigger: {
          trigger: ".sc-project .common-inner",
          start: "0% 0%",
          end: "100% 100%",
          scrub: 1,
          // markers: true,
          },
      });
      
      slideImg
  
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
  
  
      // .to(".sc-project .project-wrap .project-item:nth-child(2)", { height: 0 }, 'b')
      // .to(".sc-project .title-list .title-item", { yPercent: -200 }, 'b+=0.1')
  
    
      // .to(".sc-project .project-wrap .project-item:nth-child(3)", { height: 0 }, 'c')
      // .to(".sc-project .title-list .title-item", { yPercent: -300 }, 'c+=0.1')
  
      
  
      // slideImg.to(".sc-project .item:nth-child(4)", { height: 0 }, "d");
      // slideImg.to(".sc-project .slide-title a", { yPercent: -400 }, "d");
      },
  
      "(min-width: 767px) and (max-width: 1023px)": function () {
        // 애니메이션을 비활성화하거나 초기화하는 옵션
        // 예를 들어, 특정 요소의 초기 상태를 설정하거나 초기화할 수 있습니다.
      },
  });
  
  
  // 깔끔한 ~~ 설명글
  // const txTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".sc-about",
  //     stagger: 1,
  //     start: "20% center",
  //     end: "20% center",
  //     scrub: 1,
  //     markers: true,
  //   },
  // });
  
  // txTl
  
  
  
  
  // 첫 번째 애니메이션: .work-tit
  gsap.fromTo('.work-wrap .work-tit, .work-wrap .work-desc',{
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
  
  
  // 헤더 스크롤
  
  let lastScroll = 0;
  let isInProjectArea = false; // project-area에 들어갔는지 여부를 추적
  
  $(window).scroll(function () {
    const curr = $(this).scrollTop(); // 현재 스크롤 위치
    const projectAreaOffset = $(".project-area").offset().top; // .project-area의 상단 위치
    const projectAreaHeight = $(".project-area").outerHeight(); // .project-area의 높이
    const projectAreaEnd = projectAreaOffset + projectAreaHeight; // .project-area의 하단 위치
  
    // .project-area에 진입하면 헤더를 항상 숨김
    if (curr >= projectAreaOffset && curr <= projectAreaEnd) {
      if (!isInProjectArea) {
        // .project-area에 처음 진입한 경우
        $(".header").fadeOut();
        isInProjectArea = true; // .project-area 내부로 상태 갱신
      }
    } else {
      // .project-area를 벗어나면 헤더를 다시 표시
      if (isInProjectArea) {
        $(".header").fadeIn();
        isInProjectArea = false; // .project-area 외부로 상태 갱신
      }
    }
  
    // 마지막 스크롤 위치 업데이트
    lastScroll = curr;
  });
  // let projectAreaOffset = $(".project-area").offset().top;
  // let projectAreaHeight = $(".project-area").outerHeight();
  // let projectAreaEnd = projectAreaOffset + projectAreaHeight;
  // $(window).on("resize", function () {
  //   projectAreaOffset = $(".project-area").offset().top;
  //   projectAreaHeight = $(".project-area").outerHeight();
  //   projectAreaEnd = projectAreaOffset + projectAreaHeight;
  // });
  
  
  gsap.utils.toArray(".sc-title .line").forEach((item) => {
    gsap.from(item, {
      height: "0",
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
  
  // gsap.from(".sc-project .t-title .char", {
  //   yPercent: 100,
  //    opacity: 0,
  //    stagger: 0.1, 
  //    duration: 1.5,
  
  //   scrollTrigger: {
  //     trigger: 'sc-project .t-title',  
  //     start: "0% 70%",
  //     end: "0% 70%",
  //     scrub: 1,
  //     markers: true,
  //   },
  // });
  
  // const about = gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: ".footer",
  //       start: "0% 70%",
  //       end: "100% 100%",
  //       scrub: 0,
  //       markers: true,
  //     },
  //   })
  //   .from(".profile-txt .char", { yPercent: 100, opacity: 0, stagger: 0.5, duration: 1.5 })
    // .to(".about .about__desc", { yPercent: 0, opacity: 1 }, "text")
  
  
  
  const menuTl = gsap.timeline({paused:true});
  
  menuTl
    .to('.menu-wrap', { yPercent: '100' })
    .to('.menu-wrap .menu-item a', { translateY: 0, stagger: 0.1, duration: 0.2 , delay: 0.1,opacity:1})
    .to('.menu-wrap .social-list .social-item', { y: '0', delay: 0.1 });
  
  
  $('.btn-menu').click(function(){
      $('.btn-menu').toggleClass('active');
      $('body').toggleClass('hidden')
  
      if ($(this).hasClass('active')) {
        menuTl.play()
      } else {
        menuTl.reverse()
      }
      // $('.header .menu-wrap').toggleClass('active')
  })
  
  $('.menu-wrap .menu-item a').click(function(){
    $('.btn-menu').removeClass('on, active')
    menuTl.reverse()
  })
  
  
  // $('.header .menu-area .menu-close').click(function(e){
  //     e.preventDefault();
  
  //     $('.menu-area').removeClass('active');
  //     $('body').removeClass('active');
  // });
  
  
  const subProjectItems = document.querySelectorAll('.content-item');
  
  
  // 하나씩 순차적으로 애니메이션 적용하는 함수
  subProjectItems.forEach((item, index) => {
    gsap.from(item, {
      y: 120, // 시작할 때의 Y축 위치
      //opacity: 0, // 시작할 때의 불투명도
      duration: 2, // 애니메이션 지속 시간
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item, // 각 요소를 트리거로 설정
        start: 'top 80%', // 요소가 뷰포트의 80% 지점에 들어올 때 시작
        end: '150% 0%', // 애니메이션이 끝나는 시점
        scrub: true, // 스크롤할 때마다 부드럽게 동작하는 옵션
        toggleActions: 'play none none none', // 스크롤 트리거에 따른 액션
      //   markers: true,
      }
    });
  });
  
  
  
  
  let sliderItem = $('.slider-item');
  let sliderItemWidth = sliderItem.width();
  // const horSection = gsap.utils.toArray(".port__item");
  // 클래스 이름이 "port__item"인 모든 요소들을 선택하여 배열 horSection에 저장합니다.
  // gsap.to(sliderItem)
  
  console.log(sliderItemWidth); // 요소의 너비 출력
  
  // gsap.to(sliderItem,{
  //   // x: () => sliderItemWidth * -10,
  //   xPercent: -70 * (sliderItem.length - 1), //스크롤시 70%만큼 이동
  //   // defaults:{
  //   //   ease: "none", // <-- 이걸넣어야 횡스크롤 좌표가 안밀림!
  //   // },
  //   ease:"none",
  //   scrollTrigger: {
  //     trigger:".sc-learn .sc-title",
  //     start:'top -10%',
  //     // end: '+=1500',
  //     end: '+=1500',
  //     pin:".sc-learn",
  //     scrub:1,
  //     // markers:true,
  //     invalidateOnRefresh: true //반응형,ScrollTrigger 캐시를 재설정
  //   }
  // });
  
  // $('.nav-area a').on('click', function(e) {
  //   e.preventDefault();
  //   $('html, body').animate(
  //     {
  //       scrollTop: $($(this).attr('href')).offset().top
  //     },
  //     500 // 애니메이션 지속 시간 (ms)
  //   );
  // });
  
  // 메뉴 이동
  $('.nav-area a').click(function(e){
    e.preventDefault();
    // $('html,body').scrollTop($($(this).attr('href')).offset().top)
    gsap.to(window, {
      duration: 1,
      scrollTo: $($(this).attr('href')).offset().top
    });
  })
  
  $('.btn-contact').click(function(){
    // $('html,body').scrollTop($(document).height())
    gsap.to(window, {duration: 1, scrollTo:$(document).height()});
  })
  
  
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
  
  // 창 크기 변화 감지 이벤트
  $(window).resize(function () {
      // 현재 창 크기
      var currentWidth = $(window).width();
      var currentHeight = $(window).height();
  
      // 크기가 변경되었는지 확인
      if (currentWidth !== previousWidth || currentHeight !== previousHeight) {
          // 크기가 변경되었을 때의 동작 수행
          setTimeout(() => {
              ScrollTrigger.refresh();
          }, 400);
  
          // 이전 크기 업데이트
          previousWidth = currentWidth;
          previousHeight = currentHeight;
      }
  });
  
  // gsap.to('.sc-learn .pan-box',{
  //   yPercent:-20,
  //   height:0,
  //   scrollTrigger: {
  //     trigger:".sc-learn .desc",
  //     start:'+=50 0',
  //     end: '+=1500',
  //     // end: '0 0',
  //     scrub:1,
  //     markers:true,
  //     invalidateOnRefresh: true //반응형,ScrollTrigger 캐시를 재설정
  //   }
  // })
  
  
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
  
  $(".sc-project .project-item .con-img-box,.sc-project .video-box").hover(
    function () {
      $(".cursor").addClass("on");
    },
    function () {
      $(".cursor").removeClass("on");
    }
  );
  
  
  // $('body').mousemove(function(e){
  //   xVal = e.clientX;
  //   yVal = e.clientY;
  
  //   gsap.to('.cursor',{
  //       x:xVal,
  //       y:yVal
  //   })
  //   gsap.to('.view-wrap',1,{
  //       x:xVal,
  //       y:yVal
  //   })
    
  // })
  
  // $('.move').mousemove(function(e){
  
  //   console.log(e.offsetX);
  //   var x = ((-$(this).width() / 2) + e.offsetX) *0.4;
  //   var y = ((-$(this).height() / 2) + e.offsetY) *0.4;
  
  //   gsap.to($(this), {
  //       transform:"translate(" + x + "px," + y + "px)"
  //   })
  // })
  
  // $('.move').mouseleave(function(){
  //   gsap.to($(this), {
  //       transform:"translate(0,0)"
  //   })
  // })
  
  $('.btn, .btn-txt ').mousemove(function(e){
  
    // console.log(e.offsetX);
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
  
  $(window).on('scroll', function (){
    curr = $(this).scrollTop();
    workHeight = $('.sc-about').outerHeight();
  
    // let rolling = gsap.timeline({})
  
  
    if (curr > workHeight) {
      gsap.to('.btn-menu', {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
        // $('.header .logo-wrap, .btn-menu').addClass('on');
    } else {
      gsap.to('.btn-menu', {
        scale: 0,
        duration: 0.5,
        ease: "power2.out"
      });
        // $('.header .logo-wrap, .btn-menu').removeClass('on');
    }
  })
  
  
  
  
  
  
  
  
  })