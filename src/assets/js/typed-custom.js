
// Gallery / Portfolio Section  SuperSized 
jQuery(document).ready(function($){
    "use strict";
    
                jQuery(function($){
                    
                    $.supersized({
                    
                        // Functionality
                        slideshow               :   1,			// Slideshow on/off
                        autoplay				:	1,			// Slideshow starts playing automatically
                        start_slide             :   1,			// Start slide (0 is random)
                        stop_loop				:	0,			// Pauses slideshow on last slide
                        random					: 	0,			// Randomize slide order (Ignores start slide)
                        slide_interval          :   3000,		// Length between transitions
                        transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
                        transition_speed		:	1000,		// Speed of transition
                        new_window				:	1,			// Image links open in new window/tab
                        pause_hover             :   0,			// Pause slideshow on hover
                        keyboard_nav            :   1,			// Keyboard navigation on/off
                        performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
                        image_protect			:	1,			// Disables image dragging and right click with Javascript
                                                                   
                        // Size & Position						   
                        min_width		        :   0,			// Min width allowed (in pixels)
                        min_height		        :   0,			// Min height allowed (in pixels)
                        vertical_center         :   1,			// Vertically center background
                        horizontal_center       :   1,			// Horizontally center background
                        fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
                        fit_portrait         	:   1,			// Portrait images will not exceed browser height
                        fit_landscape			:   0,			// Landscape images will not exceed browser width
                                                                   
                        // Components							
                        slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
                        thumb_links				:	1,			// Individual thumb links for each slide
                        thumbnail_navigation    :   0,			// Thumbnail navigation
                        slides 					:  	[			// Slideshow Images
                                                            {image : 'assets/img/gallery/18.jpg', title : 'Wedding', thumb : 'assets/img/gallery/18.jpg'//, url : 'http://www.nonsensesociety.com/2011/04/maria-kazvan/'
                                                            },
                                                            {image : 'assets/img/gallery/19.jpg', title : 'Engagement', thumb : 'assets/img/gallery/19.jpg'//, url : 'http://www.nonsensesociety.com/2011/04/maria-kazvan/'
                                                            },  
                                                            {image : 'assets/img/gallery/20.jpg', title : 'Bands', thumb : 'assets/img/gallery/20.jpg'//, url : 'http://www.nonsensesociety.com/2011/04/maria-kazvan/'
                                                            },
                                                            {image : 'assets/img/gallery/21.jpg', title : 'Wedding', thumb : 'assets/img/gallery/21.jpg'//, url : 'http://www.nonsensesociety.com/2011/03/colin/'
                                                            }
                                                    ],
                                                    
                        // Theme Options			   
                        progress_bar			:	1,			// Timer for each slide							
                        mouse_scrub				:	1
                        
                    });
                });
    });
                
    // Gallery SuperSized Ends
    
    
    
    
    
    
    // ******************************************************************************************
    // Configuration Start		
    // ******************************************************************************************
    
    //*********************Google MAP *********************/
            
            var color = "#e74135" // google map background colour
            var saturation = 100 // 
            var mapLatitude=25.3817509
            var mapLongitude=68.3844447//(First Value Latitude, Second Value ), get YOUR coordenates here!: http://itouchmap.com/latlong.html
            var mapZoom_value=15 // Map zoom level parameter only numeric  
    
    
    // Google map marker example 2 locations 
            //map-marker #1
            var marker1_Latitude=25.3817509
            var marker1_Longitude=68.3693897
            var marker1_content="<h2>Dianuj Nima</h2> latifabad, Hyderabad PK" // marker or  on click content (Info Window) 
            var marker1_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!
    
            //map-marker #2
            // var marker2_Latitude=25.3817509
            // var marker2_Longitude=68.3693897
            // var marker2_content="<h2>Dianuj Nima</h2> latifabad, Hyderabad PK" // marker or  on click content (Info Window) 
            // var marker2_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!
    
    //********************* Google MAP END *********************/
    
    
    
    /**	 Piechart
     *****************************************************/
    
    $(function() {
        $('.chart').easyPieChart({
            barColor: '#eb4f43',
            trackColor:"#d5d5d5",
            lineWidth:8
        });
    });
    
    
    /**	 Typewriter
     *****************************************************/
        $(function(){
    
            $("#typed").typed({
                strings: ["Guru of <span>Frontend Developer</span> ", "<span>React Js</span> Developer.","<span>Next Js</span> Developer.","<span>Typescricpt</span> Developer.", "More than <span>3 Year's</span> Experience."],
                typeSpeed: 80,
                backDelay: 500,
                loop: true,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
                callback: function(){ foo(); },
                resetCallback: function() { newTyped(); }
            });
    
            $(".reset").click(function(){
                $("#typed").typed('reset');
            });
    
        });
    
        function newTyped(){ /* A new typed object */ }
    
        function foo(){ console.log("Callback"); }