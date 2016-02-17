/* jshint devel:false*/
/*global Resume*/

'use strict';
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuint');
        event.preventDefault();
    });
});

$(function () {
// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });
});

// The next piece of code is kind of gross. :(
var ar = null;
$(window).bind('resize load', function () {
    if ($(this).width() < 768) {
        if (ar) {
            return;
        }
        var collapse = $('.panel-collapse.collapse');
        ar = [];
        $.each(collapse, function (index, value) {
            ar.push($(value).hasClass('in'));
        });
        collapse.addClass('in');
    } else {
        if (ar) {
            $.each($('.panel-collapse.collapse'), function (index, value) {
                var had = ar.shift();
                if (had) {
                    $(value).addClass('in');
                } else {
                    $(value).removeClass('in');
                }
            });
            ar = null;
        }
    }
});

// Load PORTFOLIO
$(function () {
    var body = $('#page-top');
    var portfolioSection = $('#portfolio-entries');

    var projects = [
        {
            id: 'project1',
            name: 'SmartCare',
            date: 'April 2014 - Future',
            description: 'SmartCare launched to improve the lives of child care providers nationwide.' +
            ' We have a simple belief: Less time with computers means more time with children.' +
            ' More time with children means a better future for our country.',
            clientName: 'SmartCare',
            clientUrl: 'http://smart.care',
            thumbnailUrl: '../images/portfolio/smartcare/thumbnail.png',
            imageUrls: [
                '../images/portfolio/smartcare/smartcare1.png',
                '../images/portfolio/smartcare/smartcare2.png',
                '../images/portfolio/smartcare/smartcare3.png',
                '../images/portfolio/smartcare/smartcare4.png',
                '../images/portfolio/smartcare/smartcare5.png'
            ]
        },
        {
            id: 'project2',
            name: 'Mosaic',
            date: 'July 2013 - September 2013',
            description: 'Create a printed photo book from your Android phone or tablet in a snap.' +
            ' Arrives in 4 days. It’s the easiest way to create a personalized photo album or ' +
            'photo gift for family and friends with the pictures on your phone.',
            clientName: 'Mixbook',
            clientUrl: 'http://www.heymosaic.com/',
            thumbnailUrl: '../images/portfolio/mosaic/thumbnail.png',
            imageUrls: [
                '../images/portfolio/mosaic/mosaic1.png',
                '../images/portfolio/mosaic/mosaic2.png',
                '../images/portfolio/mosaic/mosaic3.png',
                '../images/portfolio/mosaic/mosaic4.png',
                '../images/portfolio/mosaic/mosaic5.png'
            ]
        }
    ];

    for (var i = 0; i < projects.length; i++) {
        var gridEntry = Resume.templates.projectgriditem(projects[i]);
        var modal = Resume.templates.projectmodal(projects[i]);
        $(modal).find('.carousel-indicators:first-child').addClass('active');
        $(modal).find('.carousel-inner:first-child').addClass('active');
        portfolioSection.append(gridEntry);
        body.append(modal);
    }
});

// Load SKILLS
$(function () {
    var skillsSection = $('#skills-container');
    var skills = {
        skills: [
            {name: 'Android SDK', url: 'http://developer.android.com/'},
            {name: 'Java', url: 'http://www.oracle.com/technetwork/java/index.html'},
            {name: 'Kotlin', url: 'http://kotlinlang.org/'},
            {name: 'Gradle', url: 'https://gradle.org/'},
            {name: 'Git', url: 'https://git-scm.com/'}
        ]
    };
    skillsSection.append(Resume.templates.skills(skills));
});

// Load RESUME
$(function () {
    var educationSection = $('#education');
    var eduArray = [
        {
            id: 'edu1',
            parentId: 'education',
            title: 'Bachelors Degree - Technical University of Cluj-Napoca',
            description: '<strong><a href="http://ac.utcluj.ro/">Automation and Applied Informatics</a></strong>',
            period: '2011-2015'
        }];
    educationSection.append(Resume.templates.resumeitem({items: eduArray}));

    var workSection = $('#work');
    var workArray = [
        {
            id: 'work1',
            parentId: 'work',
            title: 'Android Development Consultant - Smart Care',
            description: 'I am busy helping the <strong><a href="http://smart.care">SmartCare</a></strong> team to ' +
            'revolutionize the child care industry, bringing their service to the Android Platform.' +
            'I helped build 3 full–fledged Android apps, for different form-factors. ',
            period: '2014-Present'
        },
        {
            id: 'work2',
            parentId: 'work',
            title: 'Android Development Consultant - Mixbook',
            description: 'I worked closely with the <strong><a href="http://www.mixbook.com/">Mixbook</a></strong> team to ' +
            'help them bring their awesome photo book services to the Android platform through the Mosaic Photo books app. ' +
            'My main focus was on the 3D book previewer, which I built using OpenGL ES technologies.',
            period: '2013'
        },
        {
            id: 'work3',
            parentId: 'work',
            title: 'Android Developer - Tecknoworks',
            description: 'As an Android Developer, I had worked on a variety of mobile applications, from small to ' +
            'enterprise projects, designed for both smartphones and tablets. I had been collaborating directly with ' +
            'the clients on a daily basis to transform their ideas into cutting-edge products.',
            period: '2012-2014'
        }
    ];
    workSection.append(Resume.templates.resumeitem({items: workArray}));
});
