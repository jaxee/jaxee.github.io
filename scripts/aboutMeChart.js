$(function() {
	var width = $(window).width();
    var height = $(window).height();

    var chartThickness = 70;

    if(width < 1260) {
 		chartThickness = 130;
    } else if (width < 500) {
		chartThickness = 150;
    }

	var chart = c3.generate({
		bindto: '#aboutMeChart',
	    data: {
	        columns: [
	            ['School', 60],
	            ['TA', 20],
	            ['Volunteer', 10],
	            ['Hackathon', 10]
	        ],
	        type : 'donut',
	       	colors: {
	            School: '#4b91e7',
	            TA: '#3867a0',
	            Volunteer: '#5e8cc6',
	            Hackathon: '#9bbeea',
	            Design: "#eea043",
	            Dev: "#f38b10",
	            Ux: "#f0b775",
	            Frontend: "#3db513",
	            Backend: "#46962a",
	            UI: "#61ab48",
	            JS: "#bc1818",
	            'Node.js': "#953838",
	            'HTML/CSS': "#b02b2b",
	            Git: "#ad4949",
	            C: "#d34d4d"
	        }
	    },
	    donut: {
	        title: "This is me",
	        label: {
				format: function (value, ratio, id) { return id; } 
			},
			width: chartThickness
	    },
	    legend: {
	        show: false
	    },
	    tooltip: {
	        show: false
	    }
	});

	$("#jackieBtn").addClass("active");

    $("#jackieBtn").click(function(){
        clearSelections();
        $(".about_jackie").show();
        $("#jackieBtn").addClass("active");

        chart.load({
        	unload: true,
        	donut: {
		        title: "This is me",
		    },
	        columns: [
	            ['School', 60],
	            ['TA', 20],
	            ['Volunteer', 10],
	            ['Hackathon', 10]
	        ]
	    });
	    d3.select('#aboutMeChart .c3-chart-arcs-title').node().innerHTML = "This is what I do";
    });

    $("#educationBtn").click(function(){
        clearSelections();
        $(".about_education").show();
        $("#educationBtn").addClass("active");

        chart.load({
        	unload: true,
	        columns: [
	            ['Design', 15],
	            ['Ux', 15],
	            ['Dev', 60],
	        ]
	    });
	    d3.select('#aboutMeChart .c3-chart-arcs-title').node().innerHTML = "This is what I learn";
    });

    $("#experienceBtn").click(function(){
        clearSelections();
        $(".about_experience").show();
        $("#experienceBtn").addClass("active");

        chart.load({
        	unload: true,
	        columns: [
	            ['Frontend', 70],
	            ['Backend', 20],
	            ['UI', 10],
	        ]
	    });
	    d3.select('#aboutMeChart .c3-chart-arcs-title').node().innerHTML = "This is what I've done";
    });

    $("#skillsBtn").click(function(){
        clearSelections();
        $(".about_skills").show();
        $("#skillsBtn").addClass("active");

        chart.load({
        	unload: true,
	        columns: [
	            ['JS', 30],
	            ['Node.js', 15],
	            ['HTML/CSS', 30],
	            ['Git', 10],
	            ['C', 5],
	        ]
	    });
	    d3.select('#aboutMeChart .c3-chart-arcs-title').node().innerHTML = "This is what I know";
    });

    function clearSelections() {
        $(".about_skills").hide();
        $(".about_experience").hide();
        $(".about_education").hide();
        $(".about_jackie").hide();

        $("#jackieBtn").removeClass("active");
        $("#educationBtn").removeClass("active");
        $("#experienceBtn").removeClass("active");
        $("#skillsBtn").removeClass("active");
    }

});