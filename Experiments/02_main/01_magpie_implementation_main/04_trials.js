// In this file you can specify the trial data for your experiment


const trial_info = {
    // All topics for choice
    topic_choice: [
        {
            question: 'Bitte wähle das Thema aus, für das du dich am meisten interessierst.',
            option1: 'Tempolimit',
            option2: 'Datenschutz',
            option3: 'Gender-Debatte',
            option4: 'Vermögenssteuer',
            option5: 'Impfpflicht',
            option6: 'Migrationskontrolle',
            option7: 'Cannabis Legalisierung',
            option8: 'Fleischkonsum',
        }
    ],
    // One statement about each of the topics
    statement_rating: [
        'Es sollte eine Geschwindigkeitsbegrenzung auf deutschen Autobahnen eingeführt werden.',
        'Persönliche Daten des Verbrauchers sollten in Deutschland besser geschützt werden. ',
        'In der Öffentlichkeit sollte Sprache gegendert werden.',
        'Die Vermögenssteuer sollte in Deutschland wieder eingeführt werden.',
        'Falls auf freiwilliger Basis keine Herdenimmunität erreicht werden kann, sollte eine Impfpflicht eingeführt werden.',
        'Migration nach Deutschland sollte strenger kontrolliert werden.',
        'Das Konsumieren von Cannabis sollte in Deutschland legal sein.',
        'Fleisch sollte in Deutschland einen Mindestpreis erhalten.',
      ],
    // Each of the 8 elements contains the same dilemma (realistic dilemma), option A and B but differing ingroup/outgroup statements with regards to the topics.
    // So for each topic there is one element in this list to make sure the ingroup/outgroup statements are always in line with the topic the user chose.
    dilemma_decision_1:[
      {
        dilemma: 'Ein*e gute*r Freund*in erzählt dir, dass er/sie ein Verbrechen begangen und deshalb nachts Probleme mit dem Schlafen hat. Er/Sie hat das Gefühl, dass du der/die Einzige bist, dem/der er/sie seine/ihre Tat anvertrauen kann, und erzählt dir von dem Verbrechen. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines/deiner Freundes/Freundin für ein paar Wochen ins Gefängnis muss. ',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt.',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Tempolimit zustimmen, entschieden sich, zur Polizei zu gehen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Tempolimit zustimmen, entschieden sich, nichts zu sagen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Tempolimit nicht zustimmen, entschieden sich, nichts zu sagen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Tempolimit nicht zustimmen, entschieden sich, zur Polizei zu gehen',
      },
      {
        dilemma: 'Ein*e gute*r Freund*in erzählt dir, dass er/sie ein Verbrechen begangen und deshalb nachts Probleme mit dem Schlafen hat. Er/Sie hat das Gefühl, dass du der/die Einzige bist, dem/der er/sie seine/ihre Tat anvertrauen kann, und erzählt dir von dem Verbrechen. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines/deiner Freundes/Freundin für ein paar Wochen ins Gefängnis muss. ',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt.',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug Datenschutz zustimmen, entschieden sich, zur Polizei zu gehen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug Datenschutz nicht zustimmen, entschieden sich, nichts zu sagen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug Datenschutz zustimmen, entschieden sich, nichts zu sagen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug Datenschutz nicht zustimmen, entschieden sich, zur Polizei zu gehen.',
      },
      {
        dilemma: 'Ein*e gute*r Freund*in erzählt dir, dass er/sie ein Verbrechen begangen und deshalb nachts Probleme mit dem Schlafen hat. Er/Sie hat das Gefühl, dass du der/die Einzige bist, dem/der er/sie seine/ihre Tat anvertrauen kann, und erzählt dir von dem Verbrechen. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines/deiner Freundes/Freundin für ein paar Wochen ins Gefängnis muss. ',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt.',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Gendern zustimmen, entschieden sich, zur Polizei gehen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Gendern nicht zustimmen, entschieden sich, nichts zu sagen',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Gendern zustimmen, entschieden sich, nichts zu sagen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Gendern nicht zustimmen, entschieden sich, zur Polizei zu gehen.',
      },
      {
        dilemma: 'Ein*e gute*r Freund*in erzählt dir, dass er/sie ein Verbrechen begangen und deshalb nachts Probleme mit dem Schlafen hat. Er/Sie hat das Gefühl, dass du der/die Einzige bist, dem/der er/sie seine/ihre Tat anvertrauen kann, und erzählt dir von dem Verbrechen. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines/deiner Freundes/Freundin für ein paar Wochen ins Gefängnis muss. ',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt.',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer zustimmen, entschieden sich, zur Polizei zu gehen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer nicht zustimmen, entschieden sich, nichts zu sagen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer zustimmen, entschieden sich, nichts zu sagen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer nicht zustimmen, entschieden sich, zur Polizei zu gehen.',
      },
      {
        dilemma: 'Ein*e gute*r Freund*in erzählt dir, dass er/sie ein Verbrechen begangen und deshalb nachts Probleme mit dem Schlafen hat. Er/Sie hat das Gefühl, dass du der/die Einzige bist, dem/der er/sie seine/ihre Tat anvertrauen kann, und erzählt dir von dem Verbrechen. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines/deiner Freundes/Freundin für ein paar Wochen ins Gefängnis muss. ',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt.',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Impfpflicht zustimmen, entschieden sich, zur Polizei zu gehen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Impfpflicht nicht zustimmen, entschieden sich, nichts zu sagen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Impfpflicht zustimmen, entschieden sich, nichts zu sagen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Impfpflicht nicht zustimmen, entschieden sich, zur Polizei zu gehen.',
      },
      {
        dilemma: 'Ein*e gute*r Freund*in erzählt dir, dass er/sie ein Verbrechen begangen und deshalb nachts Probleme mit dem Schlafen hat. Er/Sie hat das Gefühl, dass du der/die Einzige bist, dem/der er/sie seine/ihre Tat anvertrauen kann, und erzählt dir von dem Verbrechen. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines/deiner Freundes/Freundin für ein paar Wochen ins Gefängnis muss. ',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt.',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf Migration zustimmen, entschieden sich, zur Polizei zu gehen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf Migration nicht zustimmen, entschieden sich, nichts zu sagen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf Migration zustimmen, entschieden sich, nichts zu sagen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf Migration nicht zustimmen, entschieden sich, zur Polizei zu gehen.',
      },
      {
        dilemma: 'Ein*e gute*r Freund*in erzählt dir, dass er/sie ein Verbrechen begangen und deshalb nachts Probleme mit dem Schlafen hat. Er/Sie hat das Gefühl, dass du der/die Einzige bist, dem/der er/sie seine/ihre Tat anvertrauen kann, und erzählt dir von dem Verbrechen. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines/deiner Freundes/Freundin für ein paar Wochen ins Gefängnis muss. ',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt.',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis zustimmen, entschieden sich, zur Polizei zu gehen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis nicht zustimmen, entschieden sich, nichts zu sagen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis zustimmen, entschieden sich, nichts zu sagen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis nicht zustimmen, entschieden sich, zur Polizei zu gehen.',
      },
      {
        dilemma: 'Ein*e gute*r Freund*in erzählt dir, dass er/sie ein Verbrechen begangen und deshalb nachts Probleme mit dem Schlafen hat. Er/Sie hat das Gefühl, dass du der/die Einzige bist, dem/der er/sie seine/ihre Tat anvertrauen kann, und erzählt dir von dem Verbrechen. Ein paar Tage später liest du in der Zeitung, dass jemand unschuldiges für das Verbrechen deines/deiner Freundes/Freundin für ein paar Wochen ins Gefängnis muss. ',
        optionA: 'Zur Polizei gehen und ihnen sagen, was du weißt.',
        optionB: 'Nichts sagen, weil du das Vertrauen eines Freundes nicht verraten willst.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf den Fleischkonsum zustimmen, entschieden sich, zur Polizei zu gehen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf den Fleischkonsum nicht zustimmen, entschieden sich, nichts zu sagen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf den Fleischkonsum zustimmen, entschieden sich, nichts zu sagen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf den Fleischkonsum nicht zustimmen, entschieden sich, zur Polizei zu gehen.',
      },
    ],
    // Each of the 8 elements contains the same dilemma (philosophical dilemma), option A and B but differing ingroup/outgroup statements with regards to the topics.
    // So for each topic there is one element in this list to make sure the ingroup/outgroup statements are always in line with the topic the user chose.
    dilemma_decision_2:[
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person.',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird.',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Tempolimit zustimmen, entschieden sich, die Weiche umzustellen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Tempolimit nicht zustimmen, entschieden sich, nichts zu machen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Tempolimit zustimmen, entschieden sich, nichts zu machen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Tempolimit nicht zustimmen, entschieden sich, die Weiche umzustellen.',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person.',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird.',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug Datenschutz zustimmen, entschieden sich, die Weiche umzustellen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug Datenschutz nicht zustimmen, entschieden sich, nichts zu machen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug Datenschutz zustimmen, entschieden sich, nichts zu machen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug Datenschutz nicht zustimmen, entschieden sich, die Weiche umzustellen.',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person.',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird.',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Gendern zustimmen, entschieden sich, die Weiche umzustellen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Gendern nicht zustimmen, entschieden sich, nichts zu machen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Gendern zustimmen, entschieden sich, nichts zu machen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Gendern nicht zustimmen, entschieden sich, die Weiche umzustellen.',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person.',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird.',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer zustimmen, entschieden sich, die Weiche umzustellen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer nicht zustimmen, entschieden sich, nichts zu machen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer zustimmen, entschieden sich, nichts zu machen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Vermögenssteuer nicht zustimmen, entschieden sich, die Weiche umzustellen.',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person.',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird.',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Impfpflicht zustimmen, entschieden sich, die Weiche umzustellen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Impfpflicht nicht zustimmen, entschieden sich, nichts zu machen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf die Impfpflicht zustimmen, entschieden sich, nichts zu machen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf die Impfpflicht nicht zustimmen, entschieden sich, die Weiche umzustellen.',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person.',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird.',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf Migration zustimmen, entschieden sich, die Weiche umzustellen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf Migration nicht zustimmen, entschieden sich, nichts zu machen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf Migration zustimmen, entschieden sich, nichts zu machen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf Migration nicht zustimmen, entschieden sich, die Weiche umzustellen.',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person.',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird.',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis zustimmen, entschieden sich, die Weiche umzustellen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis nicht zustimmen, entschieden sich, nichts zu machen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis zustimmen, entschieden sich, nichts zu machen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf das Konsumieren von Cannabis nicht zustimmen, entschieden sich, die Weiche umzustellen.',
      },
      {
        dilemma: 'Eine Straßenbahn ist außer Kontrolle geraten und droht, fünf Personen, die sich nicht bewegen können, zu überrollen. Du stehst in einiger Entfernung auf dem Rangierbahnhof neben einer Weiche. Durch Umstellen dieser Weiche kann die Straßenbahn auf ein anderes Gleis umgeleitet werden. Unglücklicherweise befindet sich dort eine weitere Person.',
        optionA: 'Die Weiche umstellen, sodass der Zug auf das andere Gleis geleitet wird und eine Person überfahren wird.',
        optionB: 'Nichts machen, sodass der Zug gerade weiter fährt und fünf Personen überfahren werden.',
        ingroup_a: 'Etwa 60% der Teilnehmer, die dir in Bezug auf den Fleischkonsum zustimmen, entschieden sich, die Weiche umzustellen.',
        outgroup_b: 'Etwa 85% der Teilnehmer, die dir in Bezug auf den Fleischkonsum nicht zustimmen, entschieden sich, nichts zu machen.',
        ingroup_b: 'Etwa 60% der Teilnehmer, die dir in Bezug auf den Fleischkonsum zustimmen, entschieden sich, nichts zu machen.',
        outgroup_a: 'Etwa 85% der Teilnehmer, die dir in Bezug auf den Fleischkonsum nicht zustimmen, entschieden sich, die Weiche umzustellen.',
      },
    ],
    // Containing the elements needed for the feeling check after the user makes the dilemma decision.
    feeling_options: [
      {
        question: 'Wie fühlst du dich nach dieser Entscheidung?',
        optionRight: 'Sehr gut',
        optionLeft: 'Sehr schlecht'
      }
    ],
    // Contains three questions and two possible answers each for the understanding check.
    understanding_checks: [
      {
        question: 'Welche dieser Behauptungen über dieses Experiment ist wahr?',
        option1: 'Du musstest immer so schnell wie möglich antworten.',
        option2: 'Es ist irrelevant, wie lange du für deine Antworten benötigt hast.'
      },
      {
        question: 'Welche dieser Behauptungen über dieses Experiment ist wahr?',
        option1: 'Anfangs wurden dir mehrere Themen zur Auswahl gestellt.',
        option2: 'Du konntest dir ein Dilemma aussuchen.'
      },
      {
        question: 'Welche dieser Behauptungen über dieses Experiment ist wahr?',
        option1: 'Für die Durchführung dieses Experiments erhälst du eine Aufwandsentschädigung oder VP Stunden.',
        option2: 'Wir können dir leider keine Aufwandsentschädigung oder VP Stunden anbieten, sind dir aber sehr dankbar.'
      }
    ],
    // Contains 8 elements to check whether the user actually identifies with its supposed ingroup/ not identifies with its supposed outgroup.
    // For each topic (8) this list has one element and each of these elements has 2 elements itself (one for in- and one for outgroup).
    group_identifiers: [
      [
        {
          question: 'Ich identifiziere mich als Tempolimit-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Tempolimit-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Befürworter eines stärkeren Datenschutzes',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Gegner eines stärkeren Datenschutzes',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Befürworter des Genderns in der Öffentlichkeit',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Gegner des Genderns in der Öffentlichkeit',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Vermögenssteuer-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Vermögenssteuer-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Impfpflicht-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Impflicht-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Befürworter einer stärkeren Migrationskontrolle',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Gegner einer stärkeren Migrationskontrolle',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Cannabis-Legalisierung-Befürworter',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Cannabis-Legalisierung-Gegner',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich als Befürworter eines Mindestpreises für Fleisch',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich als Gegner eines Mindestpreises für Fleisch',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ],
      [
        {
          question: 'Ich identifiziere mich mit Befürwortern einer Vermögenssteuer.',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        },
        {
          question: 'Ich identifiziere mich mit Gegnern einer Vermögenssteuer.',
          option1: 'Korrekt',
          option2: 'Inkorrekt'
        }
      ]
    ]
}
