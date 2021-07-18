// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

const custom_press_a_button = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT)
            $("main").html(`<div class='magpie-view'>
                <h1 class='magpie-view-title'>Bitte wähle das Thema aus, für das du dich am meisten interessierst!</h1>
                <button id="0" class='magpie-view-button'>Tempolimit auf deutschen Autobahnen</button>
                <button id="1" class='magpie-view-button'>Bedingungsloses Grundeinkommen</button>
                <button id="2" class='magpie-view-button'>Gendern der Sprache</button>
                <button id="3" class='magpie-view-button'>${magpie.deploy.deployMethod}</button>
                <button id="4" class='magpie-view-button'>Impfpflicht in Deutschland</button>
                <button id="5" class='magpie-view-button'>Migration nach Deutschland</button>
                <button id="6" class='magpie-view-button'>Cannabis Legalisierung</button>
                <button id="7" class='magpie-view-button'>Freigabe von Impfstoffpatenten</button>
                <button id="8" class='magpie-view-button'>Vermögenssteuer</button>
                </div>`);
            // This function will handle  the response
            const handle_click = function(e) {
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };
                // Often it makes sense to also save the config information
                // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
                console.log(magpie);
            };

            // We will add the handle_click functions to both buttons
            $('#0').on("click", handle_click);
            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
            $('#5').on("click", handle_click);
            $('#6').on("click", handle_click);
            $('#7').on("click", handle_click);
            $('#8').on("click", handle_click);

            // That's everything for this view
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

const custom_statement_rating = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            var response = magpie.trial_data[0].response;
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT) ${magpie.trial_data[0].response} or ${config.data[response]}

            // Ich habe unser problems gelöst: ids in topic choice sind indices für unser statements array in 04_trials. Möglich, trotzdem bei 0 anzufangen zu zählen und später beim indexen [response - 1 zu nehmen?]
            $("main").html(`<div class='magpie-view'>
                    <h1 class='magpie-view-title'>TEST</h1>
                    <p class='magpie-view-question magpie-view-qud'>TEST</p>
                    <p class='magpie-view-question'>${config.data[response]}</p>
                    <strong class='magpie-response-rating-option magpie-view-text'>Strongly Disagree</strong>
                    <label for="-5" class='magpie-response-rating'>-5</label>
                    <input type="radio" name="answer" id="-5" value="-5" />
                    <label for="-4" class='magpie-response-rating'>-4</label>
                    <input type="radio" name="answer" id="-4" value="-4" />
                    <label for="-3" class='magpie-response-rating'>-3</label>
                    <input type="radio" name="answer" id="-3" value="-3" />
                    <label for="-2" class='magpie-response-rating'>-2</label>
                    <input type="radio" name="answer" id="-2" value="-2" />
                    <label for="-1" class='magpie-response-rating'>-1</label>
                    <input type="radio" name="answer" id="-1" value="-1" />
                    <label for="0" class='magpie-response-rating'>0</label>
                    <input type="radio" name="answer" id="0" value="0" />
                    <label for="1" class='magpie-response-rating'>1</label>
                    <input type="radio" name="answer" id="1" value="1" />
                    <label for="2" class='magpie-response-rating'>2</label>
                    <input type="radio" name="answer" id="2" value="2" />
                    <label for="3" class='magpie-response-rating'>3</label>
                    <input type="radio" name="answer" id="3" value="3" />
                    <label for="4" class='magpie-response-rating'>4</label>
                    <input type="radio" name="answer" id="4" value="4" />
                    <label for="5" class='magpie-response-rating'>5</label>
                    <input type="radio" name="answer" id="5" value="5" />
                    <strong class='magpie-response-rating-option magpie-view-text'>Strongly Agree</strong>
                    </div>`);

            // This function will handle  the response
            const handle_click = function(e) {
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };
                // Often it makes sense to also save the config information
                // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
            };

            // We will add the handle_click functions to both buttons
            $('#-5').on("click", handle_click);
            $('#-4').on("click", handle_click);
            $('#-3').on("click", handle_click);
            $('#-2').on("click", handle_click);
            $('#-1').on("click", handle_click);
            $('#0').on("click", handle_click);
            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
            $('#5').on("click", handle_click);

            // That's everything for this view
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

const custom_dilemma = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        data: config.data,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {
            var response = magpie.trial_data[0].response;
            var rating = magpie.trial_data[1].response;
            var both_infos = Math.random() < 0.5;
            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)

            // Normally, you want to display some kind of html, to do this you append your html to the main element
            // You could use one of our predefined html-templates, with (magpie.)stimulus_container_generators["<view_name>"](config, CT) ${magpie.trial_data[0].response} or ${config.data[response]}

            // Ich habe unser problems gelöst: ids in topic choice sind indices für unser statements array in 04_trials. Möglich, trotzdem bei 0 anzufangen zu zählen und später beim indexen [response - 1 zu nehmen?]
            if (rating >= 0) {
              if (both_infos == true) {
                $("main").html(`<div class='magpie-view'>
                        <h1 class='magpie-view-title'>TITLE</h1>
                        <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma} Antwormöglichkeiten: ${config.data[response].optionA} oder ${config.data[response].optionB}
                        <br> <br> ingroup statement: ${config.data[response].pos_info} <br> outgroup statement: ${config.data[response].neg_info} </p>
                        <p class='magpie-view-question'>Wie würdest du dich entscheiden?</p>
                        <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response].optionA}</strong>
                        <label for="1" class='magpie-response-rating'>1</label>
                        <input type="radio" name="answer" id="1" value="1" />
                        <label for="2" class='magpie-response-rating'>2</label>
                        <input type="radio" name="answer" id="2" value="2" />
                        <label for="3" class='magpie-response-rating'>3</label>
                        <input type="radio" name="answer" id="3" value="3" />
                        <label for="4" class='magpie-response-rating'>4</label>
                        <input type="radio" name="answer" id="4" value="4" />
                        <label for="5" class='magpie-response-rating'>5</label>
                        <input type="radio" name="answer" id="5" value="5" />
                        <label for="6" class='magpie-response-rating'>6</label>
                        <input type="radio" name="answer" id="6" value="6" />
                        <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response].optionB}</strong>
                        </div>`);
              };
              if (both_infos == false) {
                $("main").html(`<div class='magpie-view'>
                        <h1 class='magpie-view-title'>TITLE</h1>
                        <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma} Antwormöglichkeiten: ${config.data[response].optionA} oder ${config.data[response].optionB}
                        <br> <br> ingroup statement: ${config.data[response].pos_info} </p>
                        <p class='magpie-view-question'>Wie würdest du dich entscheiden?</p>
                        <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response].optionA}</strong>
                        <label for="1" class='magpie-response-rating'>1</label>
                        <input type="radio" name="answer" id="1" value="1" />
                        <label for="2" class='magpie-response-rating'>2</label>
                        <input type="radio" name="answer" id="2" value="2" />
                        <label for="3" class='magpie-response-rating'>3</label>
                        <input type="radio" name="answer" id="3" value="3" />
                        <label for="4" class='magpie-response-rating'>4</label>
                        <input type="radio" name="answer" id="4" value="4" />
                        <label for="5" class='magpie-response-rating'>5</label>
                        <input type="radio" name="answer" id="5" value="5" />
                        <label for="6" class='magpie-response-rating'>6</label>
                        <input type="radio" name="answer" id="6" value="6" />
                        <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response].optionB}</strong>
                        </div>`);
              };
            };

            if (rating <= 0) {
              if (both_infos == true) {
                $("main").html(`<div class='magpie-view'>
                        <h1 class='magpie-view-title'>${random_boolean}</h1>
                        <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma} Antwormöglichkeiten: ${config.data[response].optionA} oder ${config.data[response].optionB}
                        <br> <br> ingroup statement: ${config.data[response].neg_info} <br> outgroup statement: ${config.data[response].pos_info} </p>
                        <p class='magpie-view-question'>Wie würdest du dich entscheiden?</p>
                        <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response].optionA}</strong>
                        <label for="1" class='magpie-response-rating'>1</label>
                        <input type="radio" name="answer" id="1" value="1" />
                        <label for="2" class='magpie-response-rating'>2</label>
                        <input type="radio" name="answer" id="2" value="2" />
                        <label for="3" class='magpie-response-rating'>3</label>
                        <input type="radio" name="answer" id="3" value="3" />
                        <label for="4" class='magpie-response-rating'>4</label>
                        <input type="radio" name="answer" id="4" value="4" />
                        <label for="5" class='magpie-response-rating'>5</label>
                        <input type="radio" name="answer" id="5" value="5" />
                        <label for="6" class='magpie-response-rating'>6</label>
                        <input type="radio" name="answer" id="6" value="6" />
                        <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response].optionB}</strong>
                        </div>`);
              };
              if (both_infos == false) {
                $("main").html(`<div class='magpie-view'>
                        <h1 class='magpie-view-title'>${random_boolean}</h1>
                        <p class='magpie-view-question magpie-view-qud'>${config.data[response].dilemma} Antwormöglichkeiten: ${config.data[response].optionA} oder ${config.data[response].optionB}
                        <br> <br> ingroup statement: ${config.data[response].neg_info} </p>
                        <p class='magpie-view-question'>Wie würdest du dich entscheiden?</p>
                        <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response].optionA}</strong>
                        <label for="1" class='magpie-response-rating'>1</label>
                        <input type="radio" name="answer" id="1" value="1" />
                        <label for="2" class='magpie-response-rating'>2</label>
                        <input type="radio" name="answer" id="2" value="2" />
                        <label for="3" class='magpie-response-rating'>3</label>
                        <input type="radio" name="answer" id="3" value="3" />
                        <label for="4" class='magpie-response-rating'>4</label>
                        <input type="radio" name="answer" id="4" value="4" />
                        <label for="5" class='magpie-response-rating'>5</label>
                        <input type="radio" name="answer" id="5" value="5" />
                        <label for="6" class='magpie-response-rating'>6</label>
                        <input type="radio" name="answer" id="6" value="6" />
                        <strong class='magpie-response-rating-option magpie-view-text'>${config.data[response].optionB}</strong>
                        </div>`);
              };
            };


            // This function will handle  the response
            const handle_click = function(e) {
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id,
                    both_infos: both_infos
                };
                // Often it makes sense to also save the config information
                // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
            };

            // We will add the handle_click functions to both buttons
            $('#1').on("click", handle_click);
            $('#2').on("click", handle_click);
            $('#3').on("click", handle_click);
            $('#4').on("click", handle_click);
            $('#5').on("click", handle_click);
            $('#6').on("click", handle_click);

            // That's everything for this view
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};

/*
<div class='magpie-view-stimulus-container'>
<div class='magpie-view-stimulus magpie-nodisplay'></div>
</div>
<div class='magpie-view-answer-container'>
</div>
*/
