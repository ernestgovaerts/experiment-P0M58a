const DEMOGRAPHICS = {
    required: true,
    Introduction: function () {
        let prompt;
        switch (window.language) {
            case 'nl':
                prompt = "Beantwoord de volgende vragen:";
                break;
            default:
                prompt = "Please answer the following questions:"
        }
        return {
            type: 'html',
            prompt: prompt
        };
    },

    /*
    Returns parameters for a jsPsychSurvey text component
     */
    Age: function () {
        let prompt;
        switch (window.language) {
            case 'nl':
                prompt = "Wat is uw leeftijd?";
                break;
            default:
                prompt = "What is your age?"
        }
        return {
            type: 'text',
            prompt: prompt,
            name: 'age',
            input_type: 'number',
            required: this.required
        }
    },

    Education: function () {
        let prompt, options;
        switch (window.language) {
            case 'nl':
                prompt = "Wat is uw hoogste opleidingsniveau?";
                options = ["Lagere school", "Begin middelbare school (tot +- 14 jaar)", "Volledige middelbare school", "Niet-universitaire hogere opleiding", "Universitaire hogere opleiding", "Doctoraat"]
                break;
            default:
                prompt = "What is your highest level of education or diploma?"
                options = ["Primary education or less", "Lower secondary education (up to + - 14 years)", "Higher secondary education", "Non-university higher education", "University higher education", "PhD"]
        }

        return {
            type: 'multi-choice',
            prompt: prompt,
            name: 'education',
            options: options,
            required: this.required,
        };
    },
    /*
    Returns parameters for a jsPsychSurvey dropdown component with language options
     */
    NativeLanguage: function () {
        let prompt, dropdown_select_prompt, options;
        switch (window.language) {
            case 'nl':
                prompt = "Wat is uw moedertaal?";
                dropdown_select_prompt = "Kies ...";
                options = [{ "value": "ab", "text": "Abchazisch" }, { "value": "om", "text": "Afaan Oromo" }, { "value": "aa", "text": "Afar" }, { "value": "af", "text": "Afrikaans" }, { "value": "ak", "text": "Akan" }, { "value": "sq", "text": "Albanees" }, { "value": "am", "text": "Amhaars" }, { "value": "ar", "text": "Arabisch" }, { "value": "an", "text": "Aragonees" }, { "value": "hy", "text": "Armeens" }, { "value": "as", "text": "Assamees" }, { "value": "av", "text": "Avaars" }, { "value": "ae", "text": "Avestisch" }, { "value": "ay", "text": "Aymara" }, { "value": "az", "text": "Azerbeidzjaans" }, { "value": "bm", "text": "Bambara" }, { "value": "ba", "text": "Basjkiers" }, { "value": "eu", "text": "Baskisch" }, { "value": "bn", "text": "Bengaals" }, { "value": "my", "text": "Birmaans" }, { "value": "bi", "text": "Bislama" }, { "value": "nb", "text": "Bokm\u00e5l-Noors" }, { "value": "bs", "text": "Bosnisch" }, { "value": "br", "text": "Bretons" }, { "value": "bg", "text": "Bulgaars" }, { "value": "ca", "text": "Catalaans" }, { "value": "ch", "text": "Chamorro" }, { "value": "zh", "text": "Chinese talen" }, { "value": "kw", "text": "Cornisch" }, { "value": "co", "text": "Corsicaans" }, { "value": "cr", "text": "Cree" }, { "value": "da", "text": "Deens" }, { "value": "dv", "text": "Divehi" }, { "value": "de", "text": "Duits" }, { "value": "dz", "text": "Dzongkha" }, { "value": "en", "text": "Engels" }, { "value": "eo", "text": "Esperanto" }, { "value": "et", "text": "Estisch" }, { "value": "ee", "text": "Ewe" }, { "value": "fo", "text": "Faer\u00f6ers" }, { "value": "fj", "text": "Fijisch" }, { "value": "fi", "text": "Fins" }, { "value": "fr", "text": "Frans" }, { "value": "ff", "text": "Fula" }, { "value": "gl", "text": "Galicisch" }, { "value": "ka", "text": "Georgisch" }, { "value": "ki", "text": "Gikuyu" }, { "value": "el", "text": "Grieks" }, { "value": "kl", "text": "Groenlands" }, { "value": "gn", "text": "Guaran\u00ed" }, { "value": "gu", "text": "Gujarati" }, { "value": "ha", "text": "Hausa" }, { "value": "ht", "text": "Ha\u00eftiaans Creools" }, { "value": "he", "text": "Hebreeuws" }, { "value": "hz", "text": "Herero" }, { "value": "hi", "text": "Hindi" }, { "value": "ho", "text": "Hiri Motu" }, { "value": "hu", "text": "Hongaars" }, { "value": "is", "text": "IJslands" }, { "value": "io", "text": "Ido" }, { "value": "ga", "text": "Iers" }, { "value": "ig", "text": "Igbo" }, { "value": "id", "text": "Indonesisch" }, { "value": "ia", "text": "Interlingua" }, { "value": "ie", "text": "Interlingue" }, { "value": "iu", "text": "Inuktitut" }, { "value": "ik", "text": "Inupiak" }, { "value": "it", "text": "Italiaans" }, { "value": "ja", "text": "Japans" }, { "value": "jv", "text": "Javaans" }, { "value": "yi", "text": "Jiddisch" }, { "value": "kn", "text": "Kannada" }, { "value": "kr", "text": "Kanuri" }, { "value": "ks", "text": "Kasjmiri" }, { "value": "kk", "text": "Kazachs" }, { "value": "cu", "text": "Kerkslavisch" }, { "value": "km", "text": "Khmer" }, { "value": "rw", "text": "Kinyarwanda" }, { "value": "ky", "text": "Kirgizisch" }, { "value": "rn", "text": "Kirundi" }, { "value": "ku", "text": "Koerdisch" }, { "value": "kg", "text": "Kongo" }, { "value": "ko", "text": "Koreaans" }, { "value": "hr", "text": "Kroatisch" }, { "value": "kj", "text": "Kwanyama" }, { "value": "lo", "text": "Laotiaans" }, { "value": "la", "text": "Latijn" }, { "value": "lv", "text": "Lets" }, { "value": "li", "text": "Limburgs" }, { "value": "ln", "text": "Lingala" }, { "value": "lt", "text": "Litouws" }, { "value": "lu", "text": "Luba-Katanga" }, { "value": "lg", "text": "Luganda" }, { "value": "lb", "text": "Luxemburgs" }, { "value": "mk", "text": "Macedonisch" }, { "value": "ml", "text": "Malayalam" }, { "value": "ms", "text": "Maleis" }, { "value": "mt", "text": "Maltees" }, { "value": "gv", "text": "Manx-Gaelisch" }, { "value": "mi", "text": "Maori" }, { "value": "mr", "text": "Marathi" }, { "value": "mh", "text": "Marshallees" }, { "value": "mn", "text": "Mongools" }, { "value": "na", "text": "Nauruaans" }, { "value": "nv", "text": "Navajo" }, { "value": "ng", "text": "Ndonga" }, { "value": "nl", "text": "Nederlands" }, { "value": "ne", "text": "Nepalees" }, { "value": "nd", "text": "Noord-Ndebele" }, { "value": "se", "text": "Noord-Samisch" }, { "value": "no", "text": "Noors" }, { "value": "ny", "text": "Nyanja" }, { "value": "nn", "text": "Nynorsk" }, { "value": "oc", "text": "Occitaans" }, { "value": "or", "text": "Odia" }, { "value": "ug", "text": "Oeigoers" }, { "value": "uk", "text": "Oekra\u00efens" }, { "value": "uz", "text": "Oezbeeks" }, { "value": "oj", "text": "Ojibweg" }, { "value": "os", "text": "Ossetisch" }, { "value": "pi", "text": "Pali" }, { "value": "ps", "text": "Pasjtoe" }, { "value": "fa", "text": "Perzisch" }, { "value": "mg", "text": "Plateaumalagasi" }, { "value": "pl", "text": "Pools" }, { "value": "pt", "text": "Portugees" }, { "value": "pa", "text": "Punjabi" }, { "value": "qu", "text": "Quechua" }, { "value": "rm", "text": "Reto-Romaans" }, { "value": "ro", "text": "Roemeens" }, { "value": "ru", "text": "Russisch" }, { "value": "sm", "text": "Samoaans" }, { "value": "sg", "text": "Sango" }, { "value": "sa", "text": "Sanskriet" }, { "value": "sc", "text": "Sardijns" }, { "value": "gd", "text": "Schots-Gaelisch" }, { "value": "sr", "text": "Servisch" }, { "value": "sn", "text": "Shona" }, { "value": "sd", "text": "Sindhi" }, { "value": "si", "text": "Singalees" }, { "value": "sl", "text": "Sloveens" }, { "value": "sk", "text": "Slowaaks" }, { "value": "su", "text": "Soendanees" }, { "value": "so", "text": "Somalisch" }, { "value": "es", "text": "Spaans" }, { "value": "sw", "text": "Swahili" }, { "value": "ss", "text": "Swazi" }, { "value": "tg", "text": "Tadzjieks" }, { "value": "tl", "text": "Tagalog" }, { "value": "ty", "text": "Tahitiaans" }, { "value": "ta", "text": "Tamil" }, { "value": "tt", "text": "Tataars" }, { "value": "te", "text": "Telugu" }, { "value": "th", "text": "Thai" }, { "value": "bo", "text": "Tibetaans" }, { "value": "ti", "text": "Tigrinya" }, { "value": "to", "text": "Tongaans" }, { "value": "cs", "text": "Tsjechisch" }, { "value": "ce", "text": "Tsjetsjeens" }, { "value": "cv", "text": "Tsjoevasjisch" }, { "value": "ts", "text": "Tsonga" }, { "value": "tn", "text": "Tswana" }, { "value": "tk", "text": "Turkmeens" }, { "value": "tr", "text": "Turks" }, { "value": "tw", "text": "Twi" }, { "value": "ur", "text": "Urdu" }, { "value": "ve", "text": "Venda" }, { "value": "vi", "text": "Vietnamees" }, { "value": "vo", "text": "Volap\u00fck" }, { "value": "wa", "text": "Waals" }, { "value": "cy", "text": "Welsh" }, { "value": "fy", "text": "Westerlauwers Fries" }, { "value": "be", "text": "Wit-Russisch" }, { "value": "wo", "text": "Wolof" }, { "value": "xh", "text": "Xhosa" }, { "value": "ii", "text": "Yi" }, { "value": "yo", "text": "Yoruba" }, { "value": "za", "text": "Zhuang" }, { "value": "zu", "text": "Zoeloe" }, { "value": "nr", "text": "Zuid-Ndebele" }, { "value": "st", "text": "Zuid-Sotho" }, { "value": "kv", "text": "Zurjeens" }, { "value": "sv", "text": "Zweeds" }];
                break;
            default:
                options = [{ "value": "ab", "text": "Abkhazian" }, { "value": "aa", "text": "Afar" }, { "value": "af", "text": "Afrikaans" }, { "value": "ak", "text": "Akan" }, { "value": "sq", "text": "Albanian" }, { "value": "am", "text": "Amharic" }, { "value": "ar", "text": "Arabic" }, { "value": "an", "text": "Aragonese" }, { "value": "hy", "text": "Armenian" }, { "value": "as", "text": "Assamese" }, { "value": "av", "text": "Avaric" }, { "value": "ae", "text": "Avestan" }, { "value": "ay", "text": "Aymara" }, { "value": "az", "text": "Azerbaijani" }, { "value": "bm", "text": "Bambara" }, { "value": "ba", "text": "Bashkir" }, { "value": "eu", "text": "Basque" }, { "value": "be", "text": "Belarusian" }, { "value": "bn", "text": "Bengali" }, { "value": "bi", "text": "Bislama" }, { "value": "bs", "text": "Bosnian" }, { "value": "br", "text": "Breton" }, { "value": "bg", "text": "Bulgarian" }, { "value": "my", "text": "Burmese" }, { "value": "ca", "text": "Catalan" }, { "value": "km", "text": "Central Khmer" }, { "value": "ch", "text": "Chamorro" }, { "value": "ce", "text": "Chechen" }, { "value": "ny", "text": "Chichewa" }, { "value": "zh", "text": "Chinese" }, { "value": "cu", "text": "Church\u00a0Slavonic" }, { "value": "cv", "text": "Chuvash" }, { "value": "kw", "text": "Cornish" }, { "value": "co", "text": "Corsican" }, { "value": "cr", "text": "Cree" }, { "value": "hr", "text": "Croatian" }, { "value": "cs", "text": "Czech" }, { "value": "da", "text": "Danish" }, { "value": "dv", "text": "Divehi" }, { "value": "nl", "text": "Dutch" }, { "value": "dz", "text": "Dzongkha" }, { "value": "en", "text": "English" }, { "value": "eo", "text": "Esperanto" }, { "value": "et", "text": "Estonian" }, { "value": "ee", "text": "Ewe" }, { "value": "fo", "text": "Faroese" }, { "value": "fj", "text": "Fijian" }, { "value": "fi", "text": "Finnish" }, { "value": "fr", "text": "French" }, { "value": "ff", "text": "Fulah" }, { "value": "gd", "text": "Gaelic" }, { "value": "gl", "text": "Galician" }, { "value": "lg", "text": "Ganda" }, { "value": "ka", "text": "Georgian" }, { "value": "de", "text": "German" }, { "value": "el", "text": "Greek" }, { "value": "gn", "text": "Guarani" }, { "value": "gu", "text": "Gujarati" }, { "value": "ht", "text": "Haitian" }, { "value": "ha", "text": "Hausa" }, { "value": "he", "text": "Hebrew" }, { "value": "hz", "text": "Herero" }, { "value": "hi", "text": "Hindi" }, { "value": "ho", "text": "Hiri Motu" }, { "value": "hu", "text": "Hungarian" }, { "value": "is", "text": "Icelandic" }, { "value": "io", "text": "Ido" }, { "value": "ig", "text": "Igbo" }, { "value": "id", "text": "Indonesian" }, { "value": "ia", "text": "Interlingua" }, { "value": "ie", "text": "Interlingue" }, { "value": "iu", "text": "Inuktitut" }, { "value": "ik", "text": "Inupiaq" }, { "value": "ga", "text": "Irish" }, { "value": "it", "text": "Italian" }, { "value": "ja", "text": "Japanese" }, { "value": "jv", "text": "Javanese" }, { "value": "kl", "text": "Kalaallisut" }, { "value": "kn", "text": "Kannada" }, { "value": "kr", "text": "Kanuri" }, { "value": "ks", "text": "Kashmiri" }, { "value": "kk", "text": "Kazakh" }, { "value": "ki", "text": "Kikuyu" }, { "value": "rw", "text": "Kinyarwanda" }, { "value": "ky", "text": "Kirghiz" }, { "value": "kv", "text": "Komi" }, { "value": "kg", "text": "Kongo" }, { "value": "ko", "text": "Korean" }, { "value": "kj", "text": "Kuanyama" }, { "value": "ku", "text": "Kurdish" }, { "value": "lo", "text": "Lao" }, { "value": "la", "text": "Latin" }, { "value": "lv", "text": "Latvian" }, { "value": "li", "text": "Limburgan" }, { "value": "ln", "text": "Lingala" }, { "value": "lt", "text": "Lithuanian" }, { "value": "lu", "text": "Luba-Katanga" }, { "value": "lb", "text": "Luxembourgish" }, { "value": "mk", "text": "Macedonian" }, { "value": "mg", "text": "Malagasy" }, { "value": "ms", "text": "Malay" }, { "value": "ml", "text": "Malayalam" }, { "value": "mt", "text": "Maltese" }, { "value": "gv", "text": "Manx" }, { "value": "mi", "text": "Maori" }, { "value": "mr", "text": "Marathi" }, { "value": "mh", "text": "Marshallese" }, { "value": "mn", "text": "Mongolian" }, { "value": "na", "text": "Nauru" }, { "value": "nv", "text": "Navajo" }, { "value": "ng", "text": "Ndonga" }, { "value": "ne", "text": "Nepali" }, { "value": "nd", "text": "North Ndebele" }, { "value": "se", "text": "Northern Sami" }, { "value": "no", "text": "Norwegian" }, { "value": "nb", "text": "Norwegian Bokm\u00e5l" }, { "value": "nn", "text": "Norwegian Nynorsk" }, { "value": "oc", "text": "Occitan" }, { "value": "oj", "text": "Ojibwa" }, { "value": "or", "text": "Oriya" }, { "value": "om", "text": "Oromo" }, { "value": "os", "text": "Ossetian" }, { "value": "pi", "text": "Pali" }, { "value": "ps", "text": "Pashto" }, { "value": "fa", "text": "Persian" }, { "value": "pl", "text": "Polish" }, { "value": "pt", "text": "Portuguese" }, { "value": "pa", "text": "Punjabi" }, { "value": "qu", "text": "Quechua" }, { "value": "ro", "text": "Romanian" }, { "value": "rm", "text": "Romansh" }, { "value": "rn", "text": "Rundi" }, { "value": "ru", "text": "Russian" }, { "value": "sm", "text": "Samoan" }, { "value": "sg", "text": "Sango" }, { "value": "sa", "text": "Sanskrit" }, { "value": "sc", "text": "Sardinian" }, { "value": "sr", "text": "Serbian" }, { "value": "sn", "text": "Shona" }, { "value": "ii", "text": "Sichuan Yi" }, { "value": "sd", "text": "Sindhi" }, { "value": "si", "text": "Sinhala" }, { "value": "sk", "text": "Slovak" }, { "value": "sl", "text": "Slovenian" }, { "value": "so", "text": "Somali" }, { "value": "nr", "text": "South Ndebele" }, { "value": "st", "text": "Southern Sotho" }, { "value": "es", "text": "Spanish" }, { "value": "su", "text": "Sundanese" }, { "value": "sw", "text": "Swahili" }, { "value": "ss", "text": "Swati" }, { "value": "sv", "text": "Swedish" }, { "value": "tl", "text": "Tagalog" }, { "value": "ty", "text": "Tahitian" }, { "value": "tg", "text": "Tajik" }, { "value": "ta", "text": "Tamil" }, { "value": "tt", "text": "Tatar" }, { "value": "te", "text": "Telugu" }, { "value": "th", "text": "Thai" }, { "value": "bo", "text": "Tibetan" }, { "value": "ti", "text": "Tigrinya" }, { "value": "to", "text": "Tonga" }, { "value": "ts", "text": "Tsonga" }, { "value": "tn", "text": "Tswana" }, { "value": "tr", "text": "Turkish" }, { "value": "tk", "text": "Turkmen" }, { "value": "tw", "text": "Twi" }, { "value": "ug", "text": "Uighur" }, { "value": "uk", "text": "Ukrainian" }, { "value": "ur", "text": "Urdu" }, { "value": "uz", "text": "Uzbek" }, { "value": "ve", "text": "Venda" }, { "value": "vi", "text": "Vietnamese" }, { "value": "vo", "text": "Volap\u00fck" }, { "value": "wa", "text": "Walloon" }, { "value": "cy", "text": "Welsh" }, { "value": "fy", "text": "Western Frisian" }, { "value": "wo", "text": "Wolof" }, { "value": "xh", "text": "Xhosa" }, { "value": "yi", "text": "Yiddish" }, { "value": "yo", "text": "Yoruba" }, { "value": "za", "text": "Zhuang" }, { "value": "zu", "text": "Zulu" }];
                prompt = "What is your native language?";
                dropdown_select_prompt = "Choose ...";
        }

        return {
            type: 'drop-down',
            prompt: prompt,
            dropdown_select_prompt: dropdown_select_prompt,
            name: 'native_language',
            options: options,
            required: this.required,
        };
    },

    Nationality: function () {
        let prompt, dropdown_select_prompt, options;
        switch (window.language) {
            case 'nl':
                prompt = "Wat is uw geboorteland?";
                dropdown_select_prompt = "Kies ...";
                options = [{ "value": "AF", "text": "Afghanistan" }, { "value": "AL", "text": "Albani\u00eb" }, { "value": "DZ", "text": "Algerije" }, { "value": "AS", "text": "Amerikaans-Samoa" }, { "value": "VI", "text": "Amerikaanse Maagdeneilanden" }, { "value": "AD", "text": "Andorra" }, { "value": "AO", "text": "Angola" }, { "value": "AI", "text": "Anguilla" }, { "value": "AQ", "text": "Antarctica" }, { "value": "AG", "text": "Antigua en Barbuda" }, { "value": "AR", "text": "Argentini\u00eb" }, { "value": "AM", "text": "Armeni\u00eb" }, { "value": "AW", "text": "Aruba" }, { "value": "AU", "text": "Australi\u00eb" }, { "value": "AZ", "text": "Azerbeidzjan" }, { "value": "BS", "text": "Bahama's" }, { "value": "BH", "text": "Bahrein" }, { "value": "BD", "text": "Bangladesh" }, { "value": "BB", "text": "Barbados" }, { "value": "BE", "text": "Belgi\u00eb" }, { "value": "BZ", "text": "Belize" }, { "value": "BJ", "text": "Benin" }, { "value": "BM", "text": "Bermuda" }, { "value": "BT", "text": "Bhutan" }, { "value": "BO", "text": "Bolivia" }, { "value": "BA", "text": "Bosni\u00eb en Herzegovina" }, { "value": "BW", "text": "Botswana" }, { "value": "BV", "text": "Bouvet" }, { "value": "BR", "text": "Brazili\u00eb" }, { "value": "IO", "text": "Brits Indische Oceaanterritorium" }, { "value": "VG", "text": "Britse Maagdeneilanden" }, { "value": "BN", "text": "Brunei" }, { "value": "BG", "text": "Bulgarije" }, { "value": "BF", "text": "Burkina Faso" }, { "value": "BI", "text": "Burundi" }, { "value": "KH", "text": "Cambodja" }, { "value": "CA", "text": "Canada" }, { "value": "BQ", "text": "Caribisch Nederland" }, { "value": "CF", "text": "Centraal-Afrikaanse Republiek" }, { "value": "CL", "text": "Chili" }, { "value": "CN", "text": "China" }, { "value": "CX", "text": "Christmaseiland" }, { "value": "CC", "text": "Cocoseilanden" }, { "value": "CO", "text": "Colombia" }, { "value": "KM", "text": "Comoren" }, { "value": "CG", "text": "Congo-Brazzaville" }, { "value": "CD", "text": "Congo-Kinshasa" }, { "value": "CK", "text": "Cookeilanden" }, { "value": "CR", "text": "Costa Rica" }, { "value": "CU", "text": "Cuba" }, { "value": "CW", "text": "Cura\u00e7ao" }, { "value": "CY", "text": "Cyprus" }, { "value": "DK", "text": "Denemarken" }, { "value": "DJ", "text": "Djibouti" }, { "value": "DM", "text": "Dominica" }, { "value": "DO", "text": "Dominicaanse Republiek" }, { "value": "DE", "text": "Duitsland" }, { "value": "EC", "text": "Ecuador" }, { "value": "EG", "text": "Egypte" }, { "value": "SV", "text": "El Salvador" }, { "value": "GQ", "text": "Equatoriaal-Guinea" }, { "value": "ER", "text": "Eritrea" }, { "value": "EE", "text": "Estland" }, { "value": "ET", "text": "Ethiopi\u00eb" }, { "value": "FO", "text": "Faer\u00f6er" }, { "value": "FK", "text": "Falklandeilanden" }, { "value": "FJ", "text": "Fiji" }, { "value": "PH", "text": "Filipijnen" }, { "value": "FI", "text": "Finland" }, { "value": "FR", "text": "Frankrijk" }, { "value": "GF", "text": "Frans-Guyana" }, { "value": "PF", "text": "Frans-Polynesi\u00eb" }, { "value": "TF", "text": "Franse Zuidelijke Gebieden" }, { "value": "GA", "text": "Gabon" }, { "value": "GM", "text": "Gambia" }, { "value": "GE", "text": "Georgi\u00eb" }, { "value": "GH", "text": "Ghana" }, { "value": "GI", "text": "Gibraltar" }, { "value": "GD", "text": "Grenada" }, { "value": "GR", "text": "Griekenland" }, { "value": "GL", "text": "Groenland" }, { "value": "GP", "text": "Guadeloupe" }, { "value": "GU", "text": "Guam" }, { "value": "GT", "text": "Guatemala" }, { "value": "GG", "text": "Guernsey" }, { "value": "GN", "text": "Guinee" }, { "value": "GW", "text": "Guinee-Bissau" }, { "value": "GY", "text": "Guyana" }, { "value": "HT", "text": "Ha\u00efti" }, { "value": "HM", "text": "Heard en McDonaldeilanden" }, { "value": "HN", "text": "Honduras" }, { "value": "HU", "text": "Hongarije" }, { "value": "HK", "text": "Hongkong" }, { "value": "IS", "text": "IJsland" }, { "value": "IE", "text": "Ierland" }, { "value": "IN", "text": "India" }, { "value": "ID", "text": "Indonesi\u00eb" }, { "value": "IQ", "text": "Irak" }, { "value": "IR", "text": "Iran" }, { "value": "IL", "text": "Isra\u00ebl" }, { "value": "IT", "text": "Itali\u00eb" }, { "value": "CI", "text": "Ivoorkust" }, { "value": "JM", "text": "Jamaica" }, { "value": "JP", "text": "Japan" }, { "value": "YE", "text": "Jemen" }, { "value": "JE", "text": "Jersey" }, { "value": "JO", "text": "Jordani\u00eb" }, { "value": "KY", "text": "Kaaimaneilanden" }, { "value": "CV", "text": "Kaapverdi\u00eb" }, { "value": "CM", "text": "Kameroen" }, { "value": "KZ", "text": "Kazachstan" }, { "value": "KE", "text": "Kenia" }, { "value": "KG", "text": "Kirgizi\u00eb" }, { "value": "KI", "text": "Kiribati" }, { "value": "UM", "text": "Kleine afgelegen eilanden van de Verenigde Staten" }, { "value": "KW", "text": "Koeweit" }, { "value": "HR", "text": "Kroati\u00eb" }, { "value": "LA", "text": "Laos" }, { "value": "LS", "text": "Lesotho" }, { "value": "LV", "text": "Letland" }, { "value": "LB", "text": "Libanon" }, { "value": "LR", "text": "Liberia" }, { "value": "LY", "text": "Libi\u00eb" }, { "value": "LI", "text": "Liechtenstein" }, { "value": "LT", "text": "Litouwen" }, { "value": "LU", "text": "Luxemburg" }, { "value": "MO", "text": "Macau" }, { "value": "MG", "text": "Madagaskar" }, { "value": "MW", "text": "Malawi" }, { "value": "MV", "text": "Malediven" }, { "value": "MY", "text": "Maleisi\u00eb" }, { "value": "ML", "text": "Mali" }, { "value": "MT", "text": "Malta" }, { "value": "IM", "text": "Man" }, { "value": "MA", "text": "Marokko" }, { "value": "MH", "text": "Marshalleilanden" }, { "value": "MQ", "text": "Martinique" }, { "value": "MR", "text": "Mauritani\u00eb" }, { "value": "MU", "text": "Mauritius" }, { "value": "YT", "text": "Mayotte" }, { "value": "MX", "text": "Mexico" }, { "value": "FM", "text": "Micronesi\u00eb" }, { "value": "MD", "text": "Moldavi\u00eb" }, { "value": "MC", "text": "Monaco" }, { "value": "MN", "text": "Mongoli\u00eb" }, { "value": "ME", "text": "Montenegro" }, { "value": "MS", "text": "Montserrat" }, { "value": "MZ", "text": "Mozambique" }, { "value": "MM", "text": "Myanmar" }, { "value": "NA", "text": "Namibi\u00eb" }, { "value": "NR", "text": "Nauru" }, { "value": "NL", "text": "Nederland" }, { "value": "NP", "text": "Nepal" }, { "value": "NI", "text": "Nicaragua" }, { "value": "NC", "text": "Nieuw-Caledoni\u00eb" }, { "value": "NZ", "text": "Nieuw-Zeeland" }, { "value": "NE", "text": "Niger" }, { "value": "NG", "text": "Nigeria" }, { "value": "NU", "text": "Niue" }, { "value": "KP", "text": "Noord-Korea" }, { "value": "MK", "text": "Noord-Macedoni\u00eb" }, { "value": "MP", "text": "Noordelijke Marianen" }, { "value": "NO", "text": "Noorwegen" }, { "value": "NF", "text": "Norfolk" }, { "value": "UG", "text": "Oeganda" }, { "value": "UA", "text": "Oekra\u00efne" }, { "value": "UZ", "text": "Oezbekistan" }, { "value": "OM", "text": "Oman" }, { "value": "TL", "text": "Oost-Timor" }, { "value": "AT", "text": "Oostenrijk" }, { "value": "PK", "text": "Pakistan" }, { "value": "PW", "text": "Palau" }, { "value": "PS", "text": "Palestina" }, { "value": "PA", "text": "Panama" }, { "value": "PG", "text": "Papoea-Nieuw-Guinea" }, { "value": "PY", "text": "Paraguay" }, { "value": "PE", "text": "Peru" }, { "value": "PN", "text": "Pitcairneilanden" }, { "value": "PL", "text": "Polen" }, { "value": "PT", "text": "Portugal" }, { "value": "PR", "text": "Puerto Rico" }, { "value": "QA", "text": "Qatar" }, { "value": "RO", "text": "Roemeni\u00eb" }, { "value": "RU", "text": "Rusland" }, { "value": "RW", "text": "Rwanda" }, { "value": "RE", "text": "R\u00e9union" }, { "value": "KN", "text": "Saint Kitts en Nevis" }, { "value": "LC", "text": "Saint Lucia" }, { "value": "VC", "text": "Saint Vincent en de Grenadines" }, { "value": "BL", "text": "Saint-Barth\u00e9lemy" }, { "value": "MF", "text": "Saint-Martin" }, { "value": "PM", "text": "Saint-Pierre en Miquelon" }, { "value": "SB", "text": "Salomonseilanden" }, { "value": "WS", "text": "Samoa" }, { "value": "SM", "text": "San Marino" }, { "value": "ST", "text": "Sao Tom\u00e9 en Principe" }, { "value": "SA", "text": "Saoedi-Arabi\u00eb" }, { "value": "SN", "text": "Senegal" }, { "value": "RS", "text": "Servi\u00eb" }, { "value": "SC", "text": "Seychellen" }, { "value": "SL", "text": "Sierra Leone" }, { "value": "SG", "text": "Singapore" }, { "value": "SX", "text": "Sint Maarten" }, { "value": "SH", "text": "Sint-Helena, Ascension en Tristan da Cunha" }, { "value": "SI", "text": "Sloveni\u00eb" }, { "value": "SK", "text": "Slowakije" }, { "value": "SD", "text": "Soedan" }, { "value": "SO", "text": "Somali\u00eb" }, { "value": "ES", "text": "Spanje" }, { "value": "SJ", "text": "Spitsbergen en Jan Mayen" }, { "value": "LK", "text": "Sri Lanka" }, { "value": "SR", "text": "Suriname" }, { "value": "SZ", "text": "Swaziland" }, { "value": "SY", "text": "Syri\u00eb" }, { "value": "TJ", "text": "Tadzjikistan" }, { "value": "TW", "text": "Taiwan" }, { "value": "TZ", "text": "Tanzania" }, { "value": "TH", "text": "Thailand" }, { "value": "TG", "text": "Togo" }, { "value": "TK", "text": "Tokelau" }, { "value": "TO", "text": "Tonga" }, { "value": "TT", "text": "Trinidad en Tobago" }, { "value": "TD", "text": "Tsjaad" }, { "value": "CZ", "text": "Tsjechi\u00eb" }, { "value": "TN", "text": "Tunesi\u00eb" }, { "value": "TR", "text": "Turkije" }, { "value": "TM", "text": "Turkmenistan" }, { "value": "TC", "text": "Turks- en Caicoseilanden" }, { "value": "TV", "text": "Tuvalu" }, { "value": "UY", "text": "Uruguay" }, { "value": "VU", "text": "Vanuatu" }, { "value": "VA", "text": "Vaticaanstad" }, { "value": "VE", "text": "Venezuela" }, { "value": "GB", "text": "Verenigd Koninkrijk" }, { "value": "AE", "text": "Verenigde Arabische Emiraten" }, { "value": "US", "text": "Verenigde Staten" }, { "value": "VN", "text": "Vietnam" }, { "value": "WF", "text": "Wallis en Futuna" }, { "value": "EH", "text": "Westelijke Sahara" }, { "value": "BY", "text": "Wit-Rusland" }, { "value": "ZM", "text": "Zambia" }, { "value": "ZW", "text": "Zimbabwe" }, { "value": "ZA", "text": "Zuid-Afrika" }, { "value": "GS", "text": "Zuid-Georgia en de Zuidelijke Sandwicheilanden" }, { "value": "KR", "text": "Zuid-Korea" }, { "value": "SS", "text": "Zuid-Soedan" }, { "value": "SE", "text": "Zweden" }, { "value": "CH", "text": "Zwitserland" }, { "value": "AX", "text": "\u00c5land" }];
                break;
            default:
                options = [{ "value": "AF", "text": "Afghanistan" }, { "value": "AL", "text": "Albania" }, { "value": "DZ", "text": "Algeria" }, { "value": "AS", "text": "American Samoa" }, { "value": "AD", "text": "Andorra" }, { "value": "AO", "text": "Angola" }, { "value": "AI", "text": "Anguilla" }, { "value": "AQ", "text": "Antarctica" }, { "value": "AG", "text": "Antigua and Barbuda" }, { "value": "AR", "text": "Argentina" }, { "value": "AM", "text": "Armenia" }, { "value": "AW", "text": "Aruba" }, { "value": "AU", "text": "Australia" }, { "value": "AT", "text": "Austria" }, { "value": "AZ", "text": "Azerbaijan" }, { "value": "BS", "text": "Bahamas" }, { "value": "BH", "text": "Bahrain" }, { "value": "BD", "text": "Bangladesh" }, { "value": "BB", "text": "Barbados" }, { "value": "BY", "text": "Belarus" }, { "value": "BE", "text": "Belgium" }, { "value": "BZ", "text": "Belize" }, { "value": "BJ", "text": "Benin" }, { "value": "BM", "text": "Bermuda" }, { "value": "BT", "text": "Bhutan" }, { "value": "BO", "text": "Bolivia (Plurinational State of)" }, { "value": "BQ", "text": "Bonaire, Sint Eustatius and Saba" }, { "value": "BA", "text": "Bosnia and Herzegovina" }, { "value": "BW", "text": "Botswana" }, { "value": "BV", "text": "Bouvet Island" }, { "value": "BR", "text": "Brazil" }, { "value": "IO", "text": "British Indian Ocean Territory" }, { "value": "BN", "text": "Brunei Darussalam" }, { "value": "BG", "text": "Bulgaria" }, { "value": "BF", "text": "Burkina Faso" }, { "value": "BI", "text": "Burundi" }, { "value": "CV", "text": "Cabo Verde" }, { "value": "KH", "text": "Cambodia" }, { "value": "CM", "text": "Cameroon" }, { "value": "CA", "text": "Canada" }, { "value": "KY", "text": "Cayman Islands" }, { "value": "CF", "text": "Central African Republic" }, { "value": "TD", "text": "Chad" }, { "value": "CL", "text": "Chile" }, { "value": "CN", "text": "China" }, { "value": "CX", "text": "Christmas Island" }, { "value": "CC", "text": "Cocos (Keeling) Islands" }, { "value": "CO", "text": "Colombia" }, { "value": "KM", "text": "Comoros" }, { "value": "CG", "text": "Congo" }, { "value": "CD", "text": "Congo, Democratic Republic of the" }, { "value": "CK", "text": "Cook Islands" }, { "value": "CR", "text": "Costa Rica" }, { "value": "HR", "text": "Croatia" }, { "value": "CU", "text": "Cuba" }, { "value": "CW", "text": "Cura\u00e7ao" }, { "value": "CY", "text": "Cyprus" }, { "value": "CZ", "text": "Czechia" }, { "value": "CI", "text": "C\u00f4te d'Ivoire" }, { "value": "DK", "text": "Denmark" }, { "value": "DJ", "text": "Djibouti" }, { "value": "DM", "text": "Dominica" }, { "value": "DO", "text": "Dominican Republic" }, { "value": "EC", "text": "Ecuador" }, { "value": "EG", "text": "Egypt" }, { "value": "SV", "text": "El Salvador" }, { "value": "GQ", "text": "Equatorial Guinea" }, { "value": "ER", "text": "Eritrea" }, { "value": "EE", "text": "Estonia" }, { "value": "SZ", "text": "Eswatini" }, { "value": "ET", "text": "Ethiopia" }, { "value": "FK", "text": "Falkland Islands (Malvinas)" }, { "value": "FO", "text": "Faroe Islands" }, { "value": "FJ", "text": "Fiji" }, { "value": "FI", "text": "Finland" }, { "value": "FR", "text": "France" }, { "value": "GF", "text": "French Guiana" }, { "value": "PF", "text": "French Polynesia" }, { "value": "TF", "text": "French Southern Territories" }, { "value": "GA", "text": "Gabon" }, { "value": "GM", "text": "Gambia" }, { "value": "GE", "text": "Georgia" }, { "value": "DE", "text": "Germany" }, { "value": "GH", "text": "Ghana" }, { "value": "GI", "text": "Gibraltar" }, { "value": "GR", "text": "Greece" }, { "value": "GL", "text": "Greenland" }, { "value": "GD", "text": "Grenada" }, { "value": "GP", "text": "Guadeloupe" }, { "value": "GU", "text": "Guam" }, { "value": "GT", "text": "Guatemala" }, { "value": "GG", "text": "Guernsey" }, { "value": "GN", "text": "Guinea" }, { "value": "GW", "text": "Guinea-Bissau" }, { "value": "GY", "text": "Guyana" }, { "value": "HT", "text": "Haiti" }, { "value": "HM", "text": "Heard Island and McDonald Islands" }, { "value": "VA", "text": "Holy See" }, { "value": "HN", "text": "Honduras" }, { "value": "HK", "text": "Hong Kong" }, { "value": "HU", "text": "Hungary" }, { "value": "IS", "text": "Iceland" }, { "value": "IN", "text": "India" }, { "value": "ID", "text": "Indonesia" }, { "value": "IR", "text": "Iran (Islamic Republic of)" }, { "value": "IQ", "text": "Iraq" }, { "value": "IE", "text": "Ireland" }, { "value": "IM", "text": "Isle of Man" }, { "value": "IL", "text": "Israel" }, { "value": "IT", "text": "Italy" }, { "value": "JM", "text": "Jamaica" }, { "value": "JP", "text": "Japan" }, { "value": "JE", "text": "Jersey" }, { "value": "JO", "text": "Jordan" }, { "value": "KZ", "text": "Kazakhstan" }, { "value": "KE", "text": "Kenya" }, { "value": "KI", "text": "Kiribati" }, { "value": "KP", "text": "Korea (Democratic People's Republic of)" }, { "value": "KR", "text": "Korea, Republic of" }, { "value": "KW", "text": "Kuwait" }, { "value": "KG", "text": "Kyrgyzstan" }, { "value": "LA", "text": "Lao People's Democratic Republic" }, { "value": "LV", "text": "Latvia" }, { "value": "LB", "text": "Lebanon" }, { "value": "LS", "text": "Lesotho" }, { "value": "LR", "text": "Liberia" }, { "value": "LY", "text": "Libya" }, { "value": "LI", "text": "Liechtenstein" }, { "value": "LT", "text": "Lithuania" }, { "value": "LU", "text": "Luxembourg" }, { "value": "MO", "text": "Macao" }, { "value": "MG", "text": "Madagascar" }, { "value": "MW", "text": "Malawi" }, { "value": "MY", "text": "Malaysia" }, { "value": "MV", "text": "Maldives" }, { "value": "ML", "text": "Mali" }, { "value": "MT", "text": "Malta" }, { "value": "MH", "text": "Marshall Islands" }, { "value": "MQ", "text": "Martinique" }, { "value": "MR", "text": "Mauritania" }, { "value": "MU", "text": "Mauritius" }, { "value": "YT", "text": "Mayotte" }, { "value": "MX", "text": "Mexico" }, { "value": "FM", "text": "Micronesia (Federated States of)" }, { "value": "MD", "text": "Moldova, Republic of" }, { "value": "MC", "text": "Monaco" }, { "value": "MN", "text": "Mongolia" }, { "value": "ME", "text": "Montenegro" }, { "value": "MS", "text": "Montserrat" }, { "value": "MA", "text": "Morocco" }, { "value": "MZ", "text": "Mozambique" }, { "value": "MM", "text": "Myanmar" }, { "value": "NA", "text": "Namibia" }, { "value": "NR", "text": "Nauru" }, { "value": "NP", "text": "Nepal" }, { "value": "NL", "text": "Netherlands, Kingdom of the" }, { "value": "NC", "text": "New Caledonia" }, { "value": "NZ", "text": "New Zealand" }, { "value": "NI", "text": "Nicaragua" }, { "value": "NE", "text": "Niger" }, { "value": "NG", "text": "Nigeria" }, { "value": "NU", "text": "Niue" }, { "value": "NF", "text": "Norfolk Island" }, { "value": "MK", "text": "North Macedonia" }, { "value": "MP", "text": "Northern Mariana Islands" }, { "value": "NO", "text": "Norway" }, { "value": "OM", "text": "Oman" }, { "value": "PK", "text": "Pakistan" }, { "value": "PW", "text": "Palau" }, { "value": "PS", "text": "Palestine, State of" }, { "value": "PA", "text": "Panama" }, { "value": "PG", "text": "Papua New Guinea" }, { "value": "PY", "text": "Paraguay" }, { "value": "PE", "text": "Peru" }, { "value": "PH", "text": "Philippines" }, { "value": "PN", "text": "Pitcairn" }, { "value": "PL", "text": "Poland" }, { "value": "PT", "text": "Portugal" }, { "value": "PR", "text": "Puerto Rico" }, { "value": "QA", "text": "Qatar" }, { "value": "RO", "text": "Romania" }, { "value": "RU", "text": "Russian Federation" }, { "value": "RW", "text": "Rwanda" }, { "value": "RE", "text": "R\u00e9union" }, { "value": "BL", "text": "Saint Barth\u00e9lemy" }, { "value": "SH", "text": "Saint Helena, Ascension and Tristan da Cunha" }, { "value": "KN", "text": "Saint Kitts and Nevis" }, { "value": "LC", "text": "Saint Lucia" }, { "value": "MF", "text": "Saint Martin (French part)" }, { "value": "PM", "text": "Saint Pierre and Miquelon" }, { "value": "VC", "text": "Saint Vincent and the Grenadines" }, { "value": "WS", "text": "Samoa" }, { "value": "SM", "text": "San Marino" }, { "value": "ST", "text": "Sao Tome and Principe" }, { "value": "SA", "text": "Saudi Arabia" }, { "value": "SN", "text": "Senegal" }, { "value": "RS", "text": "Serbia" }, { "value": "SC", "text": "Seychelles" }, { "value": "SL", "text": "Sierra Leone" }, { "value": "SG", "text": "Singapore" }, { "value": "SX", "text": "Sint Maarten (Dutch part)" }, { "value": "SK", "text": "Slovakia" }, { "value": "SI", "text": "Slovenia" }, { "value": "SB", "text": "Solomon Islands" }, { "value": "SO", "text": "Somalia" }, { "value": "ZA", "text": "South Africa" }, { "value": "GS", "text": "South Georgia and the South Sandwich Islands" }, { "value": "SS", "text": "South Sudan" }, { "value": "ES", "text": "Spain" }, { "value": "LK", "text": "Sri Lanka" }, { "value": "SD", "text": "Sudan" }, { "value": "SR", "text": "Suriname" }, { "value": "SJ", "text": "Svalbard and Jan Mayen" }, { "value": "SE", "text": "Sweden" }, { "value": "CH", "text": "Switzerland" }, { "value": "SY", "text": "Syrian Arab Republic" }, { "value": "TW", "text": "Taiwan, Province of China" }, { "value": "TJ", "text": "Tajikistan" }, { "value": "TZ", "text": "Tanzania, United Republic of" }, { "value": "TH", "text": "Thailand" }, { "value": "TL", "text": "Timor-Leste" }, { "value": "TG", "text": "Togo" }, { "value": "TK", "text": "Tokelau" }, { "value": "TO", "text": "Tonga" }, { "value": "TT", "text": "Trinidad and Tobago" }, { "value": "TN", "text": "Tunisia" }, { "value": "TM", "text": "Turkmenistan" }, { "value": "TC", "text": "Turks and Caicos Islands" }, { "value": "TV", "text": "Tuvalu" }, { "value": "TR", "text": "T\u00fcrkiye" }, { "value": "UG", "text": "Uganda" }, { "value": "UA", "text": "Ukraine" }, { "value": "AE", "text": "United Arab Emirates" }, { "value": "GB", "text": "United Kingdom of Great Britain and Northern Ireland" }, { "value": "UM", "text": "United States Minor Outlying Islands" }, { "value": "US", "text": "United States of America" }, { "value": "UY", "text": "Uruguay" }, { "value": "UZ", "text": "Uzbekistan" }, { "value": "VU", "text": "Vanuatu" }, { "value": "VE", "text": "Venezuela (Bolivarian Republic of)" }, { "value": "VN", "text": "Viet Nam" }, { "value": "VG", "text": "Virgin Islands (British)" }, { "value": "VI", "text": "Virgin Islands (U.S.)" }, { "value": "WF", "text": "Wallis and Futuna" }, { "value": "EH", "text": "Western Sahara" }, { "value": "YE", "text": "Yemen" }, { "value": "ZM", "text": "Zambia" }, { "value": "ZW", "text": "Zimbabwe" }, { "value": "AX", "text": "\u00c5land Islands" }];
                prompt = "What is your country of origin?"
                dropdown_select_prompt = "Choose ...";
        }

        return {
            type: 'drop-down',
            prompt: prompt,
            dropdown_select_prompt: dropdown_select_prompt,
            name: 'nationality',
            options: options,
            required: this.required,
        };
    },

    VisualImpairments: function () {
        let prompt, options;
        switch (window.language) {
            case 'nl':
                prompt = "Heeft u een visuele beperking?";
                options = ["Nee", "Ja, kleurenblind", "Ja, gecorrigeerd zicht (vb: een bril)"];
                break;
            default: {
                prompt = "Do you have any visual impairments?";
                options = ["No", "Yes, color blindness", "Yes, but corrected vision (e.g. glasses)"];
            }
        }

        return {
            type: 'multi-select',
            prompt: prompt,
            name: "visual_impairments",
            options: options,
            required: this.required,
        };
    },

    Gender: function () {
        let prompt, options;
        switch (window.language) {
            case 'nl':
                prompt = "Wat is uw geslacht?";
                options = ["Man", "Vrouw", "Niet-binair", "Ik wens dit niet te vermelden"];
                break;
            default: {
                prompt = "What is your gender?";
                options = ["Male", "Female", "Non-binary", "Prefer not to disclose"];
            }
        }

        return {
            type: 'multi-choice',
            prompt: prompt,
            name: 'gender',
            options: options,
            required: this.required,
        };
    }

}