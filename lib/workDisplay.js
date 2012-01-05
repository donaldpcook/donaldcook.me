module.exports = (function() {
  var display = function(short) {
    var html = '',
        id,
        projects = [
          {
            title: "Life with BIC",
            short: "lifewithbic",
            link: "http://apps.facebook.com/bic-flickers-stories/stories",
            about: "Client wanted a way for users to be able to submit stories    \
              about their favorite lighter. It is a JavaScript heavy app that     \
              handled most of the work on the client side. App is iframed into    \
              Facebook, and uses many aspects of the api.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "I built all of the front-end and provided back-end support. I  \
              created the one-page AJAX app using advanced JavaScript. I also made\
              a custom validation plugin for the form."
          },

          {
            title: "Clorox Clean-up Contest",
            short: "ccu",
            about: "Clean-up Contest was a contest where users could submit a funny\
              messy photo. After a set amount of time a winner was awarded a prize.\
            ",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "I built all of the front-end. This app was more traditional    \
              HTML and CSS heavy. Cross-browser support was important, including  \
              IE6. App included about 8 custom pages. This app was built inside of\
              a Facebook iFrame."
          },

          {
            title: "Disney Wild4 Game",
            short: "disneywild",
            about: "Flash Game built to promote Disney's theme parks.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "I built all of the front-end HTML wrapper and back-end.    \
              I wrote the custom back-end for keeping track of scores on a    \
              weekly basis. Front-end was a fairly basic wrapper around the   \
              Flash game (that was built by another team). Both front-end and \
              back-end were used as a framework for other similar games to use\
              afterwards."
          },

          {
            title: "BIC Flickers Facebook Tab",
            short: "flickers_tab",
            link: "http://www.facebook.com/bicflickers",
            about: "This is a landing tab for Facebook fans of BIC Flickers. Has also held numerous sweepstakes.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "I was the front-end lead and original back-end developer for this project. I built the sweepstakes engine, both for the front and back-ends. For the sweepstakes, it uses AJAX to keep everything on one page."
          },

          {
            title: "Allstate Motorcycle Facebook Tab",
            short: "motorcycle",
            link: "http://www.facebook.com/AllstateMotorcycle?sk=app_143969402329321",
            about: "This is a landing tab for Facebook fans of Allstate Motorcycle. Connects to API showing the last 5 entries from the Allstate Motorcycle iPhone app. Also uses the Google Maps API to display markers from those last 5 entries.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX", "Google Maps API",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "I developed the front-end for this app. Created the API hooks into the iPhone app and Google Maps. Heavy JavaScript was used to connect both APIs on one page"
          },

          {
            title: "BIC Spark Your Life",
            short: "recipes",
            link: "http://apps.facebook.com/bic-multi-recipes/recipes",
            about: "This app allowed users to submit recipes for others to view. Includes a scrolling gallery.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "I developed all of the front-end. Includes an AJAX gallery slider, that auto updates when a user gets close to the end for an unobtrusive experience. I also created a JSONP API so other apps could pull in the Recipe data."
          },

          {
            title: "BIC Tailgating App",
            short: "tailgating",
            link: "http://www.facebook.com/bicmultipurposelighters?sk=app_128644440536997",
            about: "This app is a contest for BIC. Allows users to submit stories to win a prize. Also hooked into the BIC Recipes api to display recipes.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "Worked as a part of a team of another front-end developer and two back-end developers. Came in during the middle to provide support and finish the front-end code."
          },

          {
            title: "Levi's Curve Cloud",
            short: "curve_quiz",
            about: "App that was created to allow users to discover their \"curve\" using a custom quiz.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra", "Flash"],
            role: "I was the front-end developer for this project. Created a custom complete JavaScript quiz, using AJAX to check answers as they were given."
          },

          {
            title: "BIC Pen Pals Tab",
            short: "pen_pal_tab",
            about: "Facebook tab created to market special BIC giveaway events and a sweepstakes.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "Developed all of the app, including the front-end and back-end. Front-end consisted of a complete JavaScript solution. Created the custom templating engine to parse the HTML. Connected to the Facebook API to create and RSVP to events."
          },

          {
            title: "BIC Pen Pals Contest Mobile Site",
            short: "pen_pal_mobile",
            about: "Mobile site built to support the BIC Pen Pals giveaway.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "Created one page JavaScript Mobile Site. I developed both the front and the back-ends. Used jQuery Mobile to help with the mobile elements of the site."
          },

          {
            title: "Marriott Fairfield Inn Facebook Tab",
            short: "hotel",
            link: "http://www.facebook.com/apps/application.php?id=243900428972469&sk=app_243900428972469",
            about: "Landing tab for Marriott Fairfield Inn Facebook fans.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "Was front-end developer. Built custom jQuery carousel plugin, which I then open sourced."
          },

          {
            title: "Levi's Go Forth Campaign",
            short: "go_forth",
            link: "http://www.levi.com.br/brasil/goforth.aspx",
            about: "Large global campaign spanning multiple countries and using multiple languages. Site was deployed to many different sites, including the front of Levis.com in multiple countries, including the U.S.",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX", "i18n",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "I was the front-end developer for this project. Built many different JavaScript components, including a ticker and a clock. Also was in charge of translations, which included 11 different languages."
          },

          {
            title: "Levi's Curve ID Facebook Tab",
            short: "curve",
            link: "http://www.facebook.com/Levis?sk=app_164902796927653",
            about: "Tab created for Facebook fans to connect with custom Levi's events",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX", "Picassa API", "i18n",
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "Created both front and back-ends. Translated to 13 different languages. Hooked into Picassa API to grab images from Levi's album. Created custom carousel jQuery plugin."
          },

          {
            title: "Living Yoga Aurora",
            short: "livingyogaaurora",
            link: "http://livingyogaaurora.com",
            about: "Full website built for Living Yoga Studio",
            tech: ["JavaScript", "HTML", "CSS", "jQuery", "AJAX", 
              "Ruby", "Rails"],
            role: "Created design, front end and back ends. Created custom CMS in Rails, including an admin so user can edit classes, events and all content in the website."
          },

          {
            title: "Souled Prototype",
            short: "souled",
            link: "http://souled.herokuapp.com",
            about: "Prototype for branding catalog startup",
            tech: ["JavaScript", "HTML5", "CSS3", "jQuery", "AJAX", 
              "Facebook JS SDK", "Node.js", "Express.js"],
            role: "Handled all of the development for the prototype. Was built in three days to make a presentation deadline. Back-end was built in Node.js. Front-end was built responsively."
          },

          {
            title: "FlickYourBIC.com",
            short: "flickyourbic",
            link: "http://flickyourbic.com",
            about: "Full website built to promote BIC Lighters",
            tech: ["JavaScript", "AMD", "HTML5", "CSS3", "LESS.CSS", "jQuery", "AJAX", 
              "Facebook JS SDK", "Ruby", "Sinatra"],
            role: "Developed the full stack, including both front-end and back-end. Front-end included multiple AMD modules for easy maintenance and modularity. Back-end was built on Sinatra in Ruby, and included a custom user flow."
          }
        ];

    var projectLength = projects.length;
    while(projectLength--) {
      if(projects[projectLength].short === short) {
        id = projectLength;
        break;
      }
    }

    html = "                                                            \
      <div>                                                             \
        <a href=/recent_work/" + (projects[id - 1] || 
                                  projects[projects.length - 1]).short +
                                  ">< Previous Project" +
          "</a>                                                         \
        <a href=/recent_work/" + (projects[id + 1] || projects[0]).short + ">" +
          "Next Project ></a>            \
      </div>                                                            \
                                                                        \
      <h1>" + projects[id].title + "</h1>";
      if (projects[id].link) {
        html += "<a href='" + projects[id].link + "'>";
        if (projects[id].link.match("facebook")) {
          html += "facebook.com</a>";
        } else {
          html += projects[id].link.replace(/http:\/\//, "") + "</a>";
        }
      }
      html += "                                                         \
      <img src=/images/preview_project_" + (id + 1) + ".png />          \
                                                                        \
      <div class=about>                                                 \
        <h2>About this project</h2>                                     \
        <p>" + projects[id].about + "</p>                               \
      </div>                                                            \
                                                                        \
      <div class=role>                                                  \
        <h2>My role</h2>                                                \
        <p>" + projects[id].role + "</p>                                \
      </div>                                                            \
                                                                        \
      <div class=tech>                                                  \
        <h2>Technologies used</h2>                                      \
        <ul>";

      for(var i = 0; i < projects[id].tech.length; i++) {
        html += "<li>" + projects[id].tech[i] + "</li>";
      }

      html += "</ul>                                                    \
      </div>                                                            \
    ";
    // switch (id) {
      // case "flickyourbic":
      //   project.id = 16;
      //   project.title = "FlickYourBIC.com";
      //   project.link = "lifewithbic.com";
      //   project.about = "Full website built to promote BIC Lighters";
      //   project.tech = ["JavaScript", "AMD", "HTML5", "CSS3", "LESS.CSS",
      //     "jQuery", "AJAX", "Facebook JS SDK", "Ruby", "Sinatra"];
      //   project.role = "Developed the full stack, including both front-end  \
      //         and back-end. Front-end included multiple AMD modules for easy\
      //         maintenance and modularity. Back-end was built on Sinatra in  \
      //         Ruby, and included a custom user flow."
      //   html = "                                                            \
      //     <div>                                                             \
      //       <a href=/recent_work/souled>< Souled</a>                        \
      //       <a href=/recent_work/lifewithbic>Life with BIC ></a>            \
      //     </div>                                                            \
      //                                                                       \
      //     <h1>FlickYourBIC.com</h1>                                         \
      //     <a href=http://flickyourbic.com>flickyourbic.com</a>              \
      //     <img src=/images/preview_project_16.png />                        \
      //                                                                       \
      //     <div class=about>                                                 \
      //       <h2>About this project</h2>                                     \
      //       <p>Full website built to promote BIC Lighters</p>               \
      //     </div>                                                            \
      //                                                                       \
      //     <div class=role>                                                  \
      //       <h2>My role</h2>                                                \
      //       <p>Developed the full stack, including both front-end and       \
      //         back-end. Front-end included multiple AMD modules for easy    \
      //         maintenance and modularity. Back-end was built on Sinatra in  \
      //         Ruby, and included a custom user flow.</p>                    \
      //     </div>                                                            \
      //                                                                       \
      //     <div class=tech>                                                  \
      //       <h2>Technologies used</h2>                                      \
      //       <ul>                                                            \
      //         <li>JavaScript</li>                                           \
      //         <li>AMD</li>                                                  \
      //         <li>HTML5</li>                                                \
      //         <li>CSS3</li>                                                 \
      //         <li>LESS.CSS</li>                                             \
      //         <li>jQuery</li>                                               \
      //         <li>AJAX</li>                                                 \
      //         <li>Facebook JS SDK</li>                                      \
      //         <li>Ruby</li>                                                 \
      //         <li>Sinatra</li>                                              \
      //       </ul>                                                           \
      //     </div>                                                            \
      //   ";
      // break;

      // case "souled":
      //   html = "                                                            \
      //     <div>                                                             \
      //       <a href=/recent_work/livingyogaaurora>< Living Yoga Aurora</a>  \
      //       <a href=/recent_work/flickyourbic>FlickYourBIC.com ></a>        \
      //     </div>                                                            \
      //                                                                       \
      //     <h1>Souled</h1>                                                   \
      //     souled.herokuapp.com</a>     \
      //     <img src=/images/preview_project_15.png />                        \
      //                                                                       \
      //     <div class=about>                                                 \
      //       <h2>About this project</h2>                                     \
      //       <p>Prototype for branding catalog startup</p>                   \
      //     </div>                                                            \
      //                                                                       \
      //     <div class=role>                                                  \
      //       <h2>My role</h2>                                                \
      //       <p>Handled all of the development for the prototype. Was built  \
      //         in three days to make a presentation deadline. Back-end was   \
      //         built in Node.js. Front-end was built responsively.</p>       \
      //     </div>                                                            \
      //                                                                       \
      //     <div class=tech>                                                  \
      //       <h2>Technologies used</h2>                                      \
      //       <ul>                                                            \
      //         <li>JavaScript</li>                                           \
      //         <li>HTML5</li>                                                \
      //         <li>CSS3</li>                                                 \
      //         <li>LESS.CSS</li>                                             \
      //         <li>jQuery</li>                                               \
      //         <li>AJAX</li>                                                 \
      //         <li>Facebook JS SDK</li>                                      \
      //         <li>Node.js</li>                                              \
      //         <li>Express.js</li>                                           \
      //       </ul>                                                           \
      //     </div>                                                            \
      //   ";
      // break;

      // case "livingyogaaurora":
      //   html = "                                                            \
      //     <div>                                                             \
      //       <a href=/recent_work/leviscurveid>< Levi's Curve ID</a>         \
      //       <a href=/recent_work/lifewithbic>Life with BIC ></a>            \
      //     </div>                                                            \
      //                                                                       \
      //     <h1>Living Yoga Aurora</h1>                                       \
      //     <a href=http://www.livingyogaaurora.com>livingyogaaurora.com</a>  \
      //     <img src=/images/preview_project_14.png />                        \
      //                                                                       \
      //     <div class=about>                                                 \
      //       <h2>About this project</h2>                                     \
      //       <p>Full website built for Living Yoga Studio</p>                \
      //     </div>                                                            \
      //                                                                       \
      //     <div class=role>                                                  \
      //       <h2>My role</h2>                                                \
      //       <p>Created design, front end and back ends. Created custom CMS  \
      //         in Rails, including an admin so user can edit classes, events \
      //         and all content in the website.</p>                           \
      //     </div>                                                            \
      //                                                                       \
      //     <div class=tech>                                                  \
      //       <h2>Technologies used</h2>                                      \
      //       <ul>                                                            \
      //         <li>JavaScript</li>                                           \
      //         <li>HTML</li>                                                 \
      //         <li>CSS</li>                                                  \
      //         <li>jQuery</li>                                               \
      //         <li>AJAX</li>                                                 \
      //         <li>Picassa API</li>                                          \
      //         <li>i18n</li>                                                 \
      //         <li>Facebook JS SDK</li>                                      \
      //         <li>Ruby</li>                                                 \
      //         <li>Rails</li>                                                \
      //       </ul>                                                           \
      //     </div>                                                            \
      //   ";
      // break;

      // case "leviscurveid":
      //   html = "                                                            \
      //     <div>                                                             \
      //       <a href=/recent_work/levisgoforth>< Levi's Go Forth</a>         \
      //       <a href=/recent_work/livingyogaaurora>Living Yoga Aurora ></a>  \
      //     </div>                                                            \
      //                                                                       \
      //     <h1>Levi's Curve ID</h1>                                          \
      //     <a href=http://www.livingyogaaurora.com>livingyogaaurora.com</a>  \
      //     <img src=/images/preview_project_14.png />                        \
      //                                                                       \
      //     <div class=about>                                                 \
      //       <h2>About this project</h2>                                     \
      //       <p>Full website built for Living Yoga Studio</p>                \
      //     </div>                                                            \
      //                                                                       \
      //     <div class=role>                                                  \
      //       <h2>My role</h2>                                                \
      //       <p>Created design, front end and back ends. Created custom CMS  \
      //         in Rails, including an admin so user can edit classes, events \
      //         and all content in the website.</p>                           \
      //     </div>                                                            \
      //                                                                       \
      //     <div class=tech>                                                  \
      //       <h2>Technologies used</h2>                                      \
      //       <ul>                                                            \
      //         <li>JavaScript</li>                                           \
      //         <li>HTML</li>                                                 \
      //         <li>CSS</li>                                                  \
      //         <li>jQuery</li>                                               \
      //         <li>AJAX</li>                                                 \
      //         <li>Picassa API</li>                                          \
      //         <li>i18n</li>                                                 \
      //         <li>Facebook JS SDK</li>                                      \
      //         <li>Ruby</li>                                                 \
      //         <li>Rails</li>                                                \
      //       </ul>                                                           \
      //     </div>                                                            \
      //   ";
      // break;
      
    // }

    return html;
  };

  return {
    display: display
  };
}());
