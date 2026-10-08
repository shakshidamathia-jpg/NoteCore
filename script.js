/* ==========================================
   NOTecore - JAVASCRIPT
========================================== */


/* ==========================================
   SUBJECT DATA
========================================== */

const subjects = [

    {
        id: "english",
        name: "English",
        icon: "🔤",
        category: "language",
        description: "Grammar, vocabulary, comprehension and exam-focused English.",
        notes: [
            {
                id: "english-parts",
                title: "Parts of Speech",
                topic: "Grammar",
                description: "Understand the eight major parts of speech.",
                content: `
                    <h2>Parts of Speech</h2>

                    <p>
                        Parts of speech classify words according to their
                        function in a sentence. A strong understanding of
                        parts of speech is important for grammar questions
                        in competitive examinations.
                    </p>

                    <div class="important-box">
                        <strong>Eight Major Parts of Speech</strong>
                    </div>

                    <ul>
                        <li><strong>Noun:</strong> Names a person, place, thing or idea.</li>
                        <li><strong>Pronoun:</strong> Replaces a noun.</li>
                        <li><strong>Verb:</strong> Shows an action or state.</li>
                        <li><strong>Adjective:</strong> Describes a noun or pronoun.</li>
                        <li><strong>Adverb:</strong> Modifies a verb, adjective or another adverb.</li>
                        <li><strong>Preposition:</strong> Shows relationship between words.</li>
                        <li><strong>Conjunction:</strong> Connects words or clauses.</li>
                        <li><strong>Interjection:</strong> Expresses sudden emotion.</li>
                    </ul>

                    <h3>Important Exam Point</h3>

                    <p>
                        The same word can function as different parts of speech
                        depending on its position and use in a sentence.
                    </p>
                `,
                tip: "Practice identifying the function of a word in the complete sentence rather than memorizing isolated definitions."
            },

            {
                id: "english-tenses",
                title: "Tenses",
                topic: "Grammar",
                description: "Complete overview of present, past and future tenses.",
                content: `
                    <h2>Tenses</h2>

                    <p>
                        Tense indicates the time of an action or state.
                        English has three primary time divisions:
                    </p>

                    <ul>
                        <li>Present</li>
                        <li>Past</li>
                        <li>Future</li>
                    </ul>

                    <h3>Four Forms</h3>

                    <ul>
                        <li>Simple</li>
                        <li>Continuous</li>
                        <li>Perfect</li>
                        <li>Perfect Continuous</li>
                    </ul>

                    <div class="important-box">
                        <strong>Exam Focus:</strong>
                        Pay special attention to subject-verb agreement
                        and sequence of tenses.
                    </div>
                `,
                tip: "In error-detection questions, first identify the subject and determine whether the verb form agrees with the required tense."
            },

            {
                id: "english-active",
                title: "Active & Passive Voice",
                topic: "Grammar",
                description: "Rules and structures for converting active into passive voice.",
                content: `
                    <h2>Active and Passive Voice</h2>

                    <p>
                        In active voice, the subject performs the action.
                        In passive voice, the subject receives the action.
                    </p>

                    <h3>Basic Structure</h3>

                    <div class="important-box">
                        <strong>Active:</strong> Subject + Verb + Object
                        <br><br>
                        <strong>Passive:</strong> Object + appropriate form of Be + V3 + by + Subject
                    </div>

                    <p>
                        Only transitive verbs can normally be converted into
                        passive voice because they require an object.
                    </p>
                `,
                tip: "During conversion, maintain the original tense while changing the verb structure."
            },

            {
                id: "english-direct",
                title: "Direct & Indirect Speech",
                topic: "Grammar",
                description: "Important narration rules for competitive examinations.",
                content: `
                    <h2>Direct and Indirect Speech</h2>

                    <p>
                        Direct speech reports the exact words of a speaker,
                        whereas indirect speech reports the meaning.
                    </p>

                    <h3>Major Changes</h3>

                    <ul>
                        <li>Pronouns may change according to the reporting subject.</li>
                        <li>Tense may shift when the reporting verb is in the past.</li>
                        <li>Time expressions may change.</li>
                        <li>Questions use statement word order in indirect speech.</li>
                    </ul>
                `,
                tip: "Memorize common changes such as now → then, today → that day and tomorrow → the next day."
            },

            {
                id: "english-error",
                title: "Error Detection",
                topic: "Grammar",
                description: "Important rules for spotting grammatical errors.",
                content: `
                    <h2>Error Detection</h2>

                    <p>
                        Error detection questions test grammar rules through
                        complete sentences.
                    </p>

                    <h3>Important Areas</h3>

                    <ul>
                        <li>Subject-verb agreement</li>
                        <li>Tenses</li>
                        <li>Articles</li>
                        <li>Prepositions</li>
                        <li>Pronouns</li>
                        <li>Conjunctions</li>
                        <li>Modifiers</li>
                        <li>Parallelism</li>
                    </ul>
                `,
                tip: "Check the subject-verb pair first, then examine tense, articles, prepositions and modifiers."
            }
        ]
    },


    {
        id: "mathematics",
        name: "Mathematics",
        icon: "🔢",
        category: "quant",
        description: "Quantitative aptitude formulas and problem-solving concepts.",
        notes: [
            {
                id: "math-percentage",
                title: "Percentage",
                topic: "Arithmetic",
                description: "Essential percentage concepts and formulas.",
                content: `
                    <h2>Percentage</h2>

                    <p>
                        Percentage represents a number as a fraction of 100.
                    </p>

                    <div class="important-box">
                        <strong>Percentage = (Part / Whole) × 100</strong>
                    </div>

                    <h3>Important Relationships</h3>

                    <ul>
                        <li>x% = x/100</li>
                        <li>Percentage increase = Increase / Original × 100</li>
                        <li>Percentage decrease = Decrease / Original × 100</li>
                    </ul>
                `,
                tip: "Convert common fractions such as 1/2, 1/4, 1/5 and 1/8 into percentages for faster calculations."
            },

            {
                id: "math-profit",
                title: "Profit & Loss",
                topic: "Arithmetic",
                description: "Concepts of cost price, selling price, profit and loss.",
                content: `
                    <h2>Profit and Loss</h2>

                    <ul>
                        <li>Profit = Selling Price − Cost Price</li>
                        <li>Loss = Cost Price − Selling Price</li>
                        <li>Profit% = Profit / Cost Price × 100</li>
                        <li>Loss% = Loss / Cost Price × 100</li>
                    </ul>

                    <div class="important-box">
                        <strong>Key Point:</strong>
                        Profit and loss percentages are normally calculated
                        using the cost price as the base.
                    </div>
                `,
                tip: "Identify the base quantity before calculating any percentage."
            },

            {
                id: "math-simple-interest",
                title: "Simple Interest",
                topic: "Arithmetic",
                description: "Formula and applications of simple interest.",
                content: `
                    <h2>Simple Interest</h2>

                    <div class="important-box">
                        <strong>SI = (P × R × T) / 100</strong>
                    </div>

                    <ul>
                        <li>P = Principal</li>
                        <li>R = Rate of interest</li>
                        <li>T = Time</li>
                    </ul>

                    <p>
                        Amount = Principal + Simple Interest.
                    </p>
                `,
                tip: "Keep rate and time in compatible units before applying the formula."
            },

            {
                id: "math-compound-interest",
                title: "Compound Interest",
                topic: "Arithmetic",
                description: "Compound interest concepts and standard formulas.",
                content: `
                    <h2>Compound Interest</h2>

                    <div class="important-box">
                        <strong>A = P(1 + R/100)<sup>T</sup></strong>
                    </div>

                    <p>
                        Compound interest is calculated on the principal
                        plus accumulated interest from previous periods.
                    </p>

                    <p>
                        Compound Interest = Amount − Principal.
                    </p>
                `,
                tip: "For annual compounding, apply the interest successively for each year."
            },

            {
                id: "math-ratio",
                title: "Ratio & Proportion",
                topic: "Arithmetic",
                description: "Essential concepts of ratio and proportionality.",
                content: `
                    <h2>Ratio and Proportion</h2>

                    <p>
                        A ratio compares two quantities of the same kind.
                    </p>

                    <div class="important-box">
                        <strong>a : b = c : d</strong>
                        <br>
                        Therefore, ad = bc.
                    </div>

                    <h3>Applications</h3>

                    <ul>
                        <li>Mixtures</li>
                        <li>Partnership</li>
                        <li>Age problems</li>
                        <li>Work and time</li>
                        <li>Profit sharing</li>
                    </ul>
                `,
                tip: "Reduce ratios to their simplest form before comparing or combining them."
            }
        ]
    },


    {
        id: "gk",
        name: "General Knowledge",
        icon: "🌐",
        category: "general",
        description: "Essential static GK for government competitive examinations.",
        notes: [
            {
                id: "gk-states",
                title: "Indian States",
                topic: "Static GK",
                description: "Important facts about Indian states and territories.",
                content: `
                    <h2>Indian States</h2>

                    <p>
                        India is a union of states and union territories.
                        Questions about capitals, geography, culture and
                        important facts frequently appear in competitive exams.
                    </p>

                    <h3>What to Revise</h3>

                    <ul>
                        <li>States and capitals</li>
                        <li>Union territories</li>
                        <li>State symbols</li>
                        <li>Important rivers</li>
                        <li>Classical and folk dances</li>
                        <li>National parks</li>
                    </ul>
                `,
                tip: "Create state-wise revision tables combining capital, language, dance, festival and important geographical features."
            },

            {
                id: "gk-capitals",
                title: "Capitals",
                topic: "Static GK",
                description: "Important national and international capitals.",
                content: `
                    <h2>Important Capitals</h2>

                    <p>
                        Capitals are frequently tested in SSC, Banking,
                        Railway and other competitive examinations.
                    </p>

                    <div class="important-box">
                        <strong>Revision Strategy</strong>
                        <p>
                            Group countries by continent and revise them
                            repeatedly rather than memorizing randomly.
                        </p>
                    </div>
                `,
                tip: "Revise country-capital pairs in short daily batches."
            },

            {
                id: "gk-days",
                title: "Important Days",
                topic: "Static GK",
                description: "Important national and international days.",
                content: `
                    <h2>Important Days</h2>

                    <ul>
                        <li>Republic Day — 26 January</li>
                        <li>National Science Day — 28 February</li>
                        <li>World Environment Day — 5 June</li>
                        <li>Independence Day — 15 August</li>
                        <li>Teachers' Day — 5 September</li>
                        <li>Constitution Day — 26 November</li>
                    </ul>
                `,
                tip: "Remember important days together with their themes when preparing for current-affairs-linked questions."
            },

            {
                id: "gk-awards",
                title: "Important Awards",
                topic: "Static GK",
                description: "Major Indian and international awards.",
                content: `
                    <h2>Important Awards</h2>

                    <p>
                        Awards are frequently asked in General Awareness
                        sections of government examinations.
                    </p>

                    <ul>
                        <li>Bharat Ratna</li>
                        <li>Padma Awards</li>
                        <li>Nobel Prize</li>
                        <li>Booker Prize</li>
                        <li>Ramon Magsaysay Award</li>
                        <li>Jnanpith Award</li>
                    </ul>
                `,
                tip: "Link each award with its field, country or organization and notable recipients."
            },

            {
                id: "gk-books",
                title: "Books & Authors",
                topic: "Static GK",
                description: "Important books and their authors.",
                content: `
                    <h2>Books and Authors</h2>

                    <p>
                        Questions on books and authors are common in static
                        General Awareness.
                    </p>

                    <h3>Preparation Areas</h3>

                    <ul>
                        <li>Indian literature</li>
                        <li>Political books</li>
                        <li>Historical works</li>
                        <li>Autobiographies</li>
                        <li>Award-winning books</li>
                    </ul>
                `,
                tip: "Maintain a short author-book list and revise it regularly."
            }
        ]
    },


    {
        id: "history",
        name: "History",
        icon: "🏛️",
        category: "general",
        description: "Ancient, Medieval and Modern Indian History.",
        notes: [
            {
                id: "history-indus",
                title: "Indus Valley Civilization",
                topic: "Ancient History",
                description: "Important features of the Harappan civilization.",
                content: `
                    <h2>Indus Valley Civilization</h2>

                    <p>
                        The Indus Valley Civilization, also called the
                        Harappan Civilization, was one of the earliest urban
                        civilizations of the Indian subcontinent.
                    </p>

                    <h3>Important Features</h3>

                    <ul>
                        <li>Planned cities</li>
                        <li>Advanced drainage systems</li>
                        <li>Standardized weights and measures</li>
                        <li>Brick construction</li>
                        <li>Long-distance trade</li>
                    </ul>

                    <div class="important-box">
                        <strong>Major Sites:</strong>
                        Harappa, Mohenjo-daro, Dholavira, Lothal and Kalibangan.
                    </div>
                `,
                tip: "For exams, learn major sites together with their distinctive archaeological features."
            },

            {
                id: "history-maurya",
                title: "Mauryan Empire",
                topic: "Ancient History",
                description: "Chandragupta Maurya, Ashoka and Mauryan administration.",
                content: `
                    <h2>Mauryan Empire</h2>

                    <p>
                        The Mauryan Empire established one of the largest
                        political formations in ancient Indian history.
                    </p>

                    <h3>Key Figures</h3>

                    <ul>
                        <li>Chandragupta Maurya</li>
                        <li>Bindusara</li>
                        <li>Ashoka</li>
                    </ul>

                    <p>
                        Ashoka's inscriptions provide important evidence
                        about his policies and administration.
                    </p>
                `,
                tip: "Focus on Ashokan inscriptions, administration, Buddhism and the Mauryan state structure."
            },

            {
                id: "history-gupta",
                title: "Gupta Empire",
                topic: "Ancient History",
                description: "Political and cultural developments during the Gupta period.",
                content: `
                    <h2>Gupta Empire</h2>

                    <p>
                        The Gupta period witnessed important developments in
                        literature, science, mathematics, art and architecture.
                    </p>

                    <h3>Important Areas</h3>

                    <ul>
                        <li>Samudragupta</li>
                        <li>Chandragupta II</li>
                        <li>Literature</li>
                        <li>Science and mathematics</li>
                        <li>Art and architecture</li>
                    </ul>
                `,
                tip: "Remember the major Gupta rulers and associate each with significant achievements and sources."
            },

            {
                id: "history-1857",
                title: "Revolt of 1857",
                topic: "Modern History",
                description: "Causes, centres, leaders and consequences of the Revolt of 1857.",
                content: `
                    <h2>Revolt of 1857</h2>

                    <p>
                        The Revolt of 1857 was a major uprising against
                        British rule in India.
                    </p>

                    <h3>Major Causes</h3>

                    <ul>
                        <li>Political expansion</li>
                        <li>Economic grievances</li>
                        <li>Military dissatisfaction</li>
                        <li>Social and religious concerns</li>
                    </ul>

                    <h3>Important Centres</h3>

                    <ul>
                        <li>Delhi</li>
                        <li>Kanpur</li>
                        <li>Lucknow</li>
                        <li>Jhansi</li>
                        <li>Bareilly</li>
                    </ul>
                `,
                tip: "Questions often combine centres, leaders, causes and consequences, so revise them together."
            },

            {
                id: "history-national",
                title: "Indian National Movement",
                topic: "Modern History",
                description: "Major events of India's freedom struggle.",
                content: `
                    <h2>Indian National Movement</h2>

                    <p>
                        The Indian national movement developed through
                        multiple phases, organizations and forms of political
                        mobilization.
                    </p>

                    <h3>Important Topics</h3>

                    <ul>
                        <li>Formation of the Indian National Congress</li>
                        <li>Swadeshi Movement</li>
                        <li>Non-Cooperation Movement</li>
                        <li>Civil Disobedience Movement</li>
                        <li>Quit India Movement</li>
                    </ul>
                `,
                tip: "Prepare a chronological timeline of major movements, sessions, acts and important personalities."
            }
        ]
    },


    {
        id: "polity",
        name: "Indian Polity",
        icon: "⚖️",
        category: "general",
        description: "Constitution, Parliament, judiciary and governance.",
        notes: [
            {
                id: "polity-rights",
                title: "Fundamental Rights",
                topic: "Constitution",
                description: "Important constitutional rights available to citizens.",
                content: `
                    <h2>Fundamental Rights</h2>

                    <p>
                        Fundamental Rights are constitutional guarantees
                        contained in Part III of the Constitution.
                    </p>

                    <h3>Main Categories</h3>

                    <ul>
                        <li>Right to Equality</li>
                        <li>Right to Freedom</li>
                        <li>Right against Exploitation</li>
                        <li>Right to Freedom of Religion</li>
                        <li>Cultural and Educational Rights</li>
                        <li>Right to Constitutional Remedies</li>
                    </ul>

                    <div class="important-box">
                        <strong>Exam Focus:</strong>
                        Articles 14, 19, 21 and 32 are especially important
                        for competitive examinations.
                    </div>
                `,
                tip: "Learn the article numbers along with the substance of each right."
            },

            {
                id: "polity-parliament",
                title: "Parliament",
                topic: "Union Legislature",
                description: "Lok Sabha, Rajya Sabha and parliamentary procedures.",
                content: `
                    <h2>Parliament</h2>

                    <p>
                        The Parliament of India consists of the President
                        and two Houses: Lok Sabha and Rajya Sabha.
                    </p>

                    <h3>Important Areas</h3>

                    <ul>
                        <li>Composition of both Houses</li>
                        <li>Sessions</li>
                        <li>Question Hour</li>
                        <li>Money Bills</li>
                        <li>Ordinary Bills</li>
                        <li>Parliamentary Committees</li>
                    </ul>
                `,
                tip: "Questions frequently test differences between Lok Sabha and Rajya Sabha powers."
            },

            {
                id: "polity-president",
                title: "President",
                topic: "Executive",
                description: "Election, powers and constitutional position of the President.",
                content: `
                    <h2>President of India</h2>

                    <p>
                        The President is the constitutional head of the
                        Union executive.
                    </p>

                    <h3>Important Areas</h3>

                    <ul>
                        <li>Election</li>
                        <li>Term of office</li>
                        <li>Impeachment</li>
                        <li>Executive powers</li>
                        <li>Legislative powers</li>
                        <li>Ordinance-making power</li>
                    </ul>
                `,
                tip: "Compare the President's constitutional powers with those of the Governor."
            },

            {
                id: "polity-supreme",
                title: "Supreme Court",
                topic: "Judiciary",
                description: "Structure, jurisdiction and constitutional role of the Supreme Court.",
                content: `
                    <h2>Supreme Court of India</h2>

                    <p>
                        The Supreme Court is the highest judicial authority
                        in India's constitutional structure.
                    </p>

                    <h3>Jurisdictions</h3>

                    <ul>
                        <li>Original jurisdiction</li>
                        <li>Appellate jurisdiction</li>
                        <li>Advisory jurisdiction</li>
                        <li>Writ jurisdiction</li>
                    </ul>
                `,
                tip: "Remember the five constitutional writs and their basic purposes."
            },

            {
                id: "polity-amendments",
                title: "Constitutional Amendments",
                topic: "Constitution",
                description: "Important constitutional amendments for examinations.",
                content: `
                    <h2>Constitutional Amendments</h2>

                    <p>
                        The Constitution can be amended through the procedure
                        provided under Article 368 and other relevant provisions.
                    </p>

                    <h3>Important Amendments</h3>

                    <ul>
                        <li>42nd Amendment</li>
                        <li>44th Amendment</li>
                        <li>73rd Amendment</li>
                        <li>74th Amendment</li>
                        <li>86th Amendment</li>
                        <li>101st Amendment</li>
                    </ul>
                `,
                tip: "Memorize each important amendment together with its key constitutional change."
            }
        ]
    },


    {
        id: "reasoning",
        name: "Reasoning",
        icon: "🧠",
        category: "general",
        description: "Logical reasoning and analytical aptitude for competitive exams.",
        notes: [
            {
                id: "reasoning-analogy",
                title: "Analogy",
                topic: "Verbal Reasoning",
                description: "Methods for solving analogy-based questions.",
                content: `
                    <h2>Analogy</h2>

                    <p>
                        Analogy questions require identifying the relationship
                        between two objects and applying the same relationship
                        to another pair.
                    </p>

                    <h3>Common Relationships</h3>

                    <ul>
                        <li>Part and whole</li>
                        <li>Worker and tool</li>
                        <li>Cause and effect</li>
                        <li>Synonym and antonym</li>
                        <li>Object and function</li>
                    </ul>
                `,
                tip: "Identify the exact relationship between the first pair before looking at answer choices."
            },

            {
                id: "reasoning-coding",
                title: "Coding-Decoding",
                topic: "Verbal Reasoning",
                description: "Common patterns used in coding-decoding problems.",
                content: `
                    <h2>Coding-Decoding</h2>

                    <p>
                        Coding-decoding questions involve converting words,
                        numbers or symbols according to a hidden rule.
                    </p>

                    <h3>Common Patterns</h3>

                    <ul>
                        <li>Alphabet position</li>
                        <li>Reverse alphabet</li>
                        <li>Letter shifting</li>
                        <li>Word arrangement</li>
                        <li>Number coding</li>
                    </ul>
                `,
                tip: "Write alphabet positions on rough paper when the pattern is not immediately visible."
            },

            {
                id: "reasoning-blood",
                title: "Blood Relations",
                topic: "Analytical Reasoning",
                description: "Techniques for solving family relationship problems.",
                content: `
                    <h2>Blood Relations</h2>

                    <p>
                        Blood relation problems test your ability to identify
                        relationships between members of a family.
                    </p>

                    <h3>Best Method</h3>

                    <ol>
                        <li>Identify the person from whom the relationship starts.</li>
                        <li>Draw a simple family tree.</li>
                        <li>Mark gender wherever possible.</li>
                        <li>Trace the required relationship.</li>
                    </ol>
                `,
                tip: "Draw the relationship instead of solving complex family chains mentally."
            },

            {
                id: "reasoning-series",
                title: "Number & Alphabet Series",
                topic: "Series",
                description: "Identify patterns in number and alphabet sequences.",
                content: `
                    <h2>Series</h2>

                    <p>
                        Series questions require finding the underlying
                        pattern in a sequence.
                    </p>

                    <h3>Common Patterns</h3>

                    <ul>
                        <li>Addition</li>
                        <li>Subtraction</li>
                        <li>Multiplication</li>
                        <li>Squares and cubes</li>
                        <li>Alternating patterns</li>
                        <li>Alphabet positions</li>
                    </ul>
                `,
                tip: "Check differences first, then second differences and multiplication patterns."
            },

            {
                id: "reasoning-syllogism",
                title: "Syllogism",
                topic: "Logical Reasoning",
                description: "Basic rules for solving syllogism questions.",
                content: `
                    <h2>Syllogism</h2>

                    <p>
                        Syllogism questions involve premises and conclusions.
                        The objective is to determine which conclusions
                        logically follow.
                    </p>

                    <h3>Important Concepts</h3>

                    <ul>
                        <li>All</li>
                        <li>No</li>
                        <li>Some</li>
                        <li>Some not</li>
                    </ul>
                `,
                tip: "Use Venn diagrams when the relationships between statements are difficult to visualize."
            }
        ]
    },


    {
        id: "science",
        name: "General Science",
        icon: "🔬",
        category: "general",
        description: "Physics, Chemistry and Biology fundamentals.",
        notes: []
    },

    {
        id: "geography",
        name: "Geography",
        icon: "🌍",
        category: "general",
        description: "Physical, Indian and world geography.",
        notes: []
    },

    {
        id: "current-affairs",
        name: "Current Affairs",
        icon: "📰",
        category: "general",
        description: "Current events and important exam-related developments.",
        notes: []
    },

    {
        id: "computer",
        name: "Computer Awareness",
        icon: "💻",
        category: "general",
        description: "Computer fundamentals, internet, networking and cyber awareness.",
        notes: []
    },

    {
        id: "banking",
        name: "Banking Awareness",
        icon: "🏦",
        category: "banking",
        description: "RBI, banking terms, monetary policy and financial awareness.",
        notes: []
    },

    {
        id: "economics",
        name: "Economics",
        icon: "📈",
        category: "general",
        description: "Indian economy, banking, inflation and economic concepts.",
        notes: []
    },

    {
        id: "static-gk",
        name: "Static GK",
        icon: "📚",
        category: "general",
        description: "Important facts, organizations, awards, books and places.",
        notes: []
    },

    {
        id: "environment",
        name: "Environment",
        icon: "🌱",
        category: "general",
        description: "Ecology, biodiversity, climate change and environmental studies.",
        notes: []
    },

    {
        id: "defence",
        name: "Defence",
        icon: "🛡️",
        category: "general",
        description: "Indian defence forces, exercises, missiles and security awareness.",
        notes: []
    },

    {
        id: "general-awareness",
        name: "General Awareness",
        icon: "💡",
        category: "general",
        description: "Mixed general awareness for major competitive examinations.",
        notes: []
    }

];


/* ==========================================
   CURRENT AFFAIRS DATA
========================================== */

const currentAffairs = [

    {
        category: "National",
        title: "Important National Developments",
        description: "Revise major national developments, government decisions and important events.",
        date: "Exam Revision"
    },

    {
        category: "International",
        title: "International Affairs",
        description: "Important international organizations, summits, agreements and global developments.",
        date: "Exam Revision"
    },

    {
        category: "Banking & Economy",
        title: "Banking and Economy Updates",
        description: "Important banking, RBI, monetary policy, inflation and financial developments.",
        date: "Exam Revision"
    },

    {
        category: "Science & Technology",
        title: "Science & Technology",
        description: "Important developments in space, science, digital technology and innovation.",
        date: "Exam Revision"
    },

    {
        category: "Defence",
        title: "Defence Current Affairs",
        description: "Important defence exercises, acquisitions, technologies and security developments.",
        date: "Exam Revision"
    },

    {
        category: "Sports",
        title: "Sports Current Affairs",
        description: "Important tournaments, championships, records and sports personalities.",
        date: "Exam Revision"
    },

    {
        category: "Awards",
        title: "Awards & Honours",
        description: "Important national and international awards and their recipients.",
        date: "Exam Revision"
    },

    {
        category: "Government Schemes",
        title: "Government Schemes",
        description: "Important government schemes, programmes and policy initiatives.",
        date: "Exam Revision"
    },

    {
        category: "Appointments",
        title: "Important Appointments",
        description: "Important appointments to national and international institutions.",
        date: "Exam Revision"
    },

    {
        category: "Important Reports",
        title: "Reports & Rankings",
        description: "Important reports, indices, rankings and publishing organizations.",
        date: "Exam Revision"
    }

];


/* ==========================================
   GLOBAL STATE
========================================== */

let currentSubject = null;
let currentNote = null;

let bookmarks =
    JSON.parse(localStorage.getItem("notecoreBookmarks")) || [];


/* ==========================================
   INITIALIZE APPLICATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    renderHomeSubjects();
    renderAllSubjects();
    renderCurrentAffairs();
    updateStatistics();
    setupNavigation();
    setupSearch();
    setupFilters();
    setupMobileMenu();

});


/* ==========================================
   NAVIGATION
========================================== */

function setupNavigation() {

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const section = link.dataset.section;

            showSection(section);

        });

    });

}


function showSection(sectionId) {

    document.querySelectorAll(".page-section")
        .forEach(section => {
            section.classList.remove("active-section");
        });

    const section = document.getElementById(sectionId);

    if (section) {
        section.classList.add("active-section");
    }

    document.querySelectorAll(".nav-link")
        .forEach(link => {
            link.classList.remove("active");

            if (link.dataset.section === sectionId) {
                link.classList.add("active");
            }
        });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    document.getElementById("navMenu")
        ?.classList.remove("show");

    if (sectionId === "bookmarks") {
        renderBookmarks();
    }

}


/* ==========================================
   SUBJECT CARDS
========================================== */

function createSubjectCard(subject) {

    const noteCount = subject.notes.length;

    return `
        <div class="subject-card">

            <div class="subject-card-top">

                <div class="subject-icon">
                    ${subject.icon}
                </div>

                <span class="subject-count">
                    ${noteCount} ${noteCount === 1 ? "note" : "notes"}
                </span>

            </div>

            <h3>${subject.name}</h3>

            <p>${subject.description}</p>

            <button
                class="open-notes"
                onclick="openSubject('${subject.id}')"
            >
                Open Notes →
            </button>

        </div>
    `;
}


function renderHomeSubjects() {

    const container =
        document.getElementById("homeSubjectGrid");

    if (!container) return;

    const popularSubjects =
        subjects.slice(0, 8);

    container.innerHTML =
        popularSubjects
            .map(createSubjectCard)
            .join("");
}


function renderAllSubjects(filter = "all") {

    const container =
        document.getElementById("subjectGrid");

    if (!container) return;

    let filteredSubjects = subjects;

    if (filter !== "all") {

        filteredSubjects =
            subjects.filter(
                subject => subject.category === filter
            );

    }

    if (!filteredSubjects.length) {

        container.innerHTML = `
            <div class="no-results">
                No subjects found.
            </div>
        `;

        return;
    }

    container.innerHTML =
        filteredSubjects
            .map(createSubjectCard)
            .join("");
}


/* ==========================================
   OPEN SUBJECT
========================================== */

function openSubject(subjectId) {

    const subject =
        subjects.find(
            item => item.id === subjectId
        );

    if (!subject) return;

    currentSubject = subject;

    document.getElementById("selectedSubjectIcon")
        .textContent = subject.icon;

    document.getElementById("selectedSubjectName")
        .textContent = subject.name;

    document.getElementById("selectedSubjectDescription")
        .textContent = subject.description;

    document.getElementById("notesSearch").value = "";

    renderNotes(subject.notes);

    showSection("notes");

}


/* ==========================================
   RENDER NOTES
========================================== */

function renderNotes(notes) {

    const container =
        document.getElementById("notesList");

    const count =
        document.getElementById("notesCount");

    if (!container) return;

    count.textContent =
        `${notes.length} ${notes.length === 1 ? "note" : "notes"}`;

    if (!notes.length) {

        container.innerHTML = `
            <div class="no-results">
                <div style="font-size:35px;margin-bottom:10px;">📚</div>
                <strong>Notes coming soon</strong>
                <p>
                    More notes for this subject will be added here.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        notes.map(note => {

            const bookmarked =
                bookmarks.includes(note.id);

            return `
                <div class="note-card">

                    <div class="note-card-icon">
                        📖
                    </div>

                    <div class="note-card-content">
                        <h3>${note.title}</h3>
                        <p>
                            ${note.topic} • ${note.description}
                        </p>
                    </div>

                    <button
                        class="note-bookmark ${bookmarked ? "bookmarked" : ""}"
                        onclick="event.stopPropagation(); toggleBookmark('${note.id}')"
                        title="Bookmark"
                    >
                        🔖
                    </button>

                    <button
                        class="note-open"
                        onclick="openNote('${note.id}')"
                    >
                        Read
                    </button>

                </div>
            `;

        }).join("");

}


/* ==========================================
   NOTE SEARCH
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const notesSearch =
        document.getElementById("notesSearch");

    notesSearch?.addEventListener("input", () => {

        if (!currentSubject) return;

        const query =
            notesSearch.value
                .trim()
                .toLowerCase();

        const filtered =
            currentSubject.notes.filter(note => {

                const searchable =
                    `${note.title}
                     ${note.topic}
                     ${note.description}
                     ${note.content}`
                    .toLowerCase();

                return searchable.includes(query);

            });

        renderNotes(filtered);

    });

});


/* ==========================================
   OPEN NOTE
========================================== */

function openNote(noteId) {

    let note = null;

    for (const subject of subjects) {

        const found =
            subject.notes.find(
                item => item.id === noteId
            );

        if (found) {

            note = found;
            currentSubject = subject;

            break;
        }

    }

    if (!note) return;

    currentNote = note;

    document.getElementById("viewerSubject")
        .textContent = currentSubject.name;

    document.getElementById("viewerTopic")
        .textContent = note.topic;

    document.getElementById("viewerTitle")
        .textContent = note.title;

    document.getElementById("viewerDescription")
        .textContent = note.description;

    document.getElementById("viewerContent")
        .innerHTML = note.content;

    document.getElementById("viewerExamTip")
        .textContent = note.tip;

    updateViewerBookmark();

    showSection("note-viewer");

}


/* ==========================================
   NOTE NAVIGATION
========================================== */

function goBackFromNote() {

    if (currentSubject) {

        openSubject(currentSubject.id);

    } else {

        showSection("subjects");

    }

}


/* ==========================================
   BOOKMARK SYSTEM
========================================== */

function saveBookmarks() {

    localStorage.setItem(
        "notecoreBookmarks",
        JSON.stringify(bookmarks)
    );

}


function toggleBookmark(noteId) {

    if (bookmarks.includes(noteId)) {

        bookmarks =
            bookmarks.filter(
                id => id !== noteId
            );

        showToast("Removed from bookmarks");

    } else {

        bookmarks.push(noteId);

        showToast("Added to bookmarks");

    }

    saveBookmarks();

    updateStatistics();

    if (currentSubject) {
        renderNotes(currentSubject.notes);
    }

    updateViewerBookmark();

}


function toggleCurrentBookmark() {

    if (!currentNote) return;

    toggleBookmark(currentNote.id);

}


function updateViewerBookmark() {

    const button =
        document.getElementById("viewerBookmark");

    if (!button || !currentNote) return;

    const saved =
        bookmarks.includes(currentNote.id);

    button.classList.toggle(
        "bookmarked",
        saved
    );

}


function renderBookmarks() {

    const container =
        document.getElementById("bookmarkList");

    if (!container) return;

    const savedNotes = [];

    subjects.forEach(subject => {

        subject.notes.forEach(note => {

            if (bookmarks.includes(note.id)) {

                savedNotes.push({
                    ...note,
                    subjectName: subject.name,
                    subjectId: subject.id,
                    subjectIcon: subject.icon
                });

            }

        });

    });

    if (!savedNotes.length) {

        container.innerHTML = `
            <div class="no-results">
                <div style="font-size:42px;margin-bottom:12px;">
                    🔖
                </div>

                <strong>No bookmarked notes yet</strong>

                <p>
                    Open a note and click the bookmark icon
                    to save it here.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        savedNotes.map(note => `

            <div class="note-card">

                <div class="note-card-icon">
                    ${note.subjectIcon}
                </div>

                <div class="note-card-content">
                    <h3>${note.title}</h3>
                    <p>
                        ${note.subjectName} • ${note.topic}
                    </p>
                </div>

                <button
                    class="note-bookmark bookmarked"
                    onclick="toggleBookmark('${note.id}')"
                >
                    🔖
                </button>

                <button
                    class="note-open"
                    onclick="openNote('${note.id}')"
                >
                    Read
                </button>

            </div>

        `).join("");

}


/* ==========================================
   STATISTICS
========================================== */

function updateStatistics() {

    const totalNotes =
        subjects.reduce(
            (total, subject) =>
                total + subject.notes.length,
            0
        );

    document.getElementById("statSubjects")
        .textContent = subjects.length;

    document.getElementById("statNotes")
        .textContent = totalNotes;

    document.getElementById("statBookmarks")
        .textContent = bookmarks.length;

    document.getElementById("statCurrentAffairs")
        .textContent = currentAffairs.length;

}


/* ==========================================
   GLOBAL SEARCH
========================================== */

function setupSearch() {

    const searchInput =
        document.getElementById("globalSearch");

    if (!searchInput) return;

    searchInput.addEventListener(
        "input",
        handleGlobalSearch
    );

}


function handleGlobalSearch(event) {

    const query =
        event.target.value
            .trim()
            .toLowerCase();

    if (!query) {

        closeSearchResults();
        return;

    }

    const results = [];

    subjects.forEach(subject => {

        if (
            subject.name
                .toLowerCase()
                .includes(query)
        ) {

            results.push({
                type: "subject",
                title: subject.name,
                subtitle: "Subject",
                icon: subject.icon,
                action: () =>
                    openSubject(subject.id)
            });

        }

        subject.notes.forEach(note => {

            const searchable =
                `${note.title}
                 ${note.topic}
                 ${note.description}`
                .toLowerCase();

            if (searchable.includes(query)) {

                results.push({
                    type: "note",
                    title: note.title,
                    subtitle:
                        `${subject.name} • ${note.topic}`,
                    icon: subject.icon,
                    action: () =>
                        openNote(note.id)
                });

            }

        });

    });

    renderSearchResults(results);

}


function renderSearchResults(results) {

    const overlay =
        document.getElementById("searchOverlay");

    const container =
        document.getElementById("searchResults");

    overlay.classList.add("show");

    if (!results.length) {

        container.innerHTML = `
            <div class="no-results">
                <div style="font-size:32px;">🔍</div>
                <p>
                    No notes or subjects found.
                </p>
            </div>
        `;

        return;

    }

    container.innerHTML =
        results.slice(0, 15)
            .map((result, index) => `

                <div
                    class="search-result"
                    onclick="searchResultAction(${index})"
                >

                    <div class="search-result-icon">
                        ${result.icon}
                    </div>

                    <div>
                        <strong>${result.title}</strong>
                        <small>${result.subtitle}</small>
                    </div>

                </div>

            `).join("");

    window.currentSearchResults = results;

}


function searchResultAction(index) {

    const result =
        window.currentSearchResults[index];

    if (!result) return;

    closeSearchResults();

    result.action();

    document.getElementById("globalSearch")
        .value = "";

}


function closeSearchResults() {

    document.getElementById("searchOverlay")
        ?.classList.remove("show");

}


/* ==========================================
   RANDOM NOTE
========================================== */

function openRandomNote() {

    const availableNotes = [];

    subjects.forEach(subject => {

        subject.notes.forEach(note => {

            availableNotes.push(note);

        });

    });

    if (!availableNotes.length) {

        showToast("Notes are being added soon.");

        return;

    }

    const randomNote =
        availableNotes[
            Math.floor(
                Math.random() *
                availableNotes.length
            )
        ];

    openNote(randomNote.id);

}


/* ==========================================
   SUBJECT FILTERS
========================================== */

function setupFilters() {

    document.querySelectorAll(".filter-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document.querySelectorAll(".filter-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                renderAllSubjects(
                    button.dataset.filter
                );

            });

        });

}


/* ==========================================
   CURRENT AFFAIRS
========================================== */

function renderCurrentAffairs(category = "All") {

    const container =
        document.getElementById(
            "currentAffairsGrid"
        );

    if (!container) return;

    let filtered =
        currentAffairs;

    if (category !== "All") {

        filtered =
            currentAffairs.filter(
                item =>
                    item.category === category
            );

    }

    container.innerHTML =
        filtered.map(item => `

            <div class="ca-card">

                <div class="ca-card-top">

                    <span class="ca-category-label">
                        ${item.category}
                    </span>

                    <span class="ca-date">
                        ${item.date}
                    </span>

                </div>

                <h3>${item.title}</h3>

                <p>${item.description}</p>

            </div>

        `).join("");

}


document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".ca-category")
        .forEach(button => {

            button.addEventListener("click", () => {

                document.querySelectorAll(".ca-category")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                renderCurrentAffairs(
                    button.dataset.category
                );

            });

        });

});


/* ==========================================
   MOBILE MENU
========================================== */

function setupMobileMenu() {

    const button =
        document.getElementById(
            "mobileMenuBtn"
        );

    const menu =
        document.getElementById(
            "navMenu"
        );

    button?.addEventListener("click", () => {

        menu.classList.toggle("show");

    });

}


/* ==========================================
   TOAST MESSAGE
========================================== */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById("toast");

    const messageElement =
        document.getElementById(
            "toastMessage"
        );

    messageElement.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

}


/* ==========================================
   CLOSE SEARCH WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener("click", event => {

    const overlay =
        document.getElementById(
            "searchOverlay"
        );

    const panel =
        document.querySelector(
            ".search-results-panel"
        );

    if (
        overlay?.classList.contains("show") &&
        !panel.contains(event.target) &&
        event.target.id !== "globalSearch"
    ) {

        closeSearchResults();

    }

});


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeSearchResults();

    }

});