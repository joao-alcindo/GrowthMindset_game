Scenarios = [

    {
        "id": 1,
        "name": "Survival",
        "menu_img": "img_menu_surv.jpg",
        "question_img":"img_quest_surv.jpg",
        "description":"It's ski season and you decide to go on a trip with some friends. As always, the group decided to charter a small plane to go to a skiing park outside of the city. Unfortunately, the plane has a failure in one of the engines and the pilot has to make a forced landing before the flight is completed. When you wake-up after the fall, you realize that although you are alright, most of your friends aren't, including the pilot.",
        "questions":[
            {
                "number":1,
                "utterance":"<p>It's ski season and you decide to go on a trip with some friends. As always, the group decided to charter a small plane to go to a skiing park outside of the city. Unfortunately, the plane has a failure in one of the engines and the pilot has to make a forced landing before the flight is completed. When you wake-up after the fall, you realize that although you are alright, most of your friends aren't, including the pilot.</p><p>After dealing with the shock, you get up and start helping the few survivors. Two other people, like yourself, are in a position to help the wounded, so the group needs to get organized to start acting. What do you do?</p>",
                
                "options": [
                    {'letter': 'A', "text": "I await instructions. I don't know where to start helping and I can't risk doing more damage. Besides, given the circumstances, the best choice for me is probably to do as I'm told.", "points": 100},
                    {'letter': 'B',"text": "I get anxious. We really need to do something quickly. Time lost in the organization could be better spent if we just help. My first thought is to immediately go to the most injured person.", "points": 200},
                    {'letter': 'C',"text": "I pause to think. I really don't  know where to start, but something must be done. Since I'm not alone, I call my friends to share my ideas of a plan of action and then decide what to do.", "points": 200},
                    {'letter': 'D',"text": "I panic. In circumstances like these, people often die, so even if we do make a plan, it probably won't be enough.", "points": 100}]
            },
            
            {
                
                "number":2,
                "utterance":"<p>After caring for the wounded, the group must decide whether to stay on the plane or seek shelter. Since there are only three people well enough to walk, the choice of course of action is between you and two others. Due to the harsh winter, the decision must be made before nightfall or you will have to spend the night among the plane wreckage. The airplane is not providing enough protection against the snowstorm.</p><p>What do you think should be done?</p>",
                
                "options": [
                    {'letter': 'A',"text": "I believe that the best option is to look for shelter. Considering the winter, the group is likely to freeze in these conditions. I understand the risks of walking on the snow with no direction, but this might be our only chance of survival", "points": 200},
                    {'letter': 'B',"text": "I still don't know what to do, but staying on the plane is certainly not the best solution. Maybe we should vote.", "points": 200},
                    {'letter': 'C',"text": "I think we should choose the lesser evil and stay on the plane. I've never been good at walking long distances or staying in the wild, I'm definitely going to die. Besides, we probably won't get anywhere.", "points": 100},
                    {'letter': 'D',"text": "I think help is probably on it's way. There is no point in risking my life walking into the middle of nowhere.", "points": 100}]
            },
            {
                "number":3,
                "utterance":"<p>Finally, the group decided to get off the plane, but there is another matter. The three who are well will have to carry the wounded along the way. However, since there are 2 wounded, someone would be left without carrying a person. Despite being a small thing, none of the three wanted to be at a disadvantage in the middle of a blizzard, if they could help it.</p><p>How do you think this should be solved?</p>",
                
                "options": [
                    {'letter': 'A',"text": "I feel like we should decide after a discussion based on arguments. The person that better defends itself, doesn't have to carry.", "points": 200},
                    {'letter': 'B',"text": "Although I didn't want to get off the plane, I think we should make the choice based on our body physique. If there is someone who is better prepared, that person should carry and if there is someone that is not, that person shouldn't. ", "points": 100},
                    {'letter': 'C',"text": "Since I didn't want to get off the plane in the first place, I guess I must be the one who doesn't carry anyone.", "points": 100},
                    {'letter': 'D',"text": "I think we should be rational. There is no reason for us to compete among ourselves to who is supposed to carry or not. Let's just take turns along the way, this way everybody has the chance to rest.", "points": 200}]
            },
            {
                "number":4,
                "utterance":"<p>Defying all odds, the group finally finds a cabin to shelter. Despite being a hunting lodge without viable technology, they find some supplies, such as medicine, blankets, warm clothes, etc. However, to everyone's disgrace, there is no food. Since it's late, the group decides to rest and wait to see if help will arrive the next morning. But then again, help does not appear and the group needs to eat to maintain their strength. </p><p>How do you act then?</p>",
                
                "options": [
                    {'letter': 'A',"text": "I think we should only leave the cabin in case of extreme hunger. It's no use risking our lives even more. Besides, none of us now know how to hunt, it's irrational to just go out.", "points": 100},
                    {'letter': 'B',"text": "I don't think anyone ever starved to death while waiting for help. We must keep warm inside the cottage and wait for the assistance", "points": 100},
                    {'letter': 'C',"text": "Since we are inside a hunting cabin, we should use the tools we found to go hunting for food. Although I've never done that, the most logical action is to consider the possibility and think about the best way of doing it.", "points": 200},
                    {'letter': 'D',"text": "I think we should focus on hunting right away. After all, since we don't know how long we'll be here, we can't depend on time. The situation can get worse and we become even weaker to carry out the task", "points": 200}]
            },
            {
                "number":5,
                "utterance":"<p>Eventually, the group decides that the best course of action is to hunt and also utilize the cabin's resources. To improve the organization, it was decided that two people would go hunting, while another would stay in the cottage to tend to the wounded. However, again there was an impasse in who would do what.</p><p>How would you solve this situation? </p>",
                
                "options": [
                    {'letter': 'A',"text": "I would suggest that we should take turns not to overexpose some of us to the cold or danger. Although I'm not comfortable with the situation, I think if we all have the same role at different times, the risk of exhaustion is lower.", "points": 200},
                    {'letter': 'B',"text": "I would definitely stay at the cabin myself, considering my previous position regarding the hunting plan. The others would have to understand that I'm not inclined towards this type of action.", "points": 100},
                    {'letter': 'C',"text": "I would ask the group about their opinions and try to come up with some middle ground that would allow the group to maintain harmony.", "points": 200},
                    {'letter': 'D',"text": "I would argue about my previous position of staying, but if my mates pressed the issue, I would go hunting, as long as the other person understood my limitations.", "points": 100}]
            }

        ]

    },

    {
        "id": 2,
        "name": "Marathon",
        "menu_img": "img_menu_mara.jpg",
        "question_img":"img_quest_mara.jpg",
        "description":"Another year begins and that feeling of change appears again. This year you are willing to dedicate more to your health and fitness, so you decide to start running as a form of sport and leisure. For many reasons you have never practiced long distance running, however it is a new sport where many challenges will be encountered. To motivate you, you and your friends have decided to sign up for a 21-kilometer half-marathon that takes place every year-end in your city.",
        "questions":[
            {
                "number":1,
                "utterance":"<p>Another year begins and that feeling of change appears again. This year you are willing to dedicate more to your health and fitness, so you decide to start running as a form of sport and leisure. For many reasons you have never practiced long distance running, however it is a new sport where many challenges will be encountered. To motivate you, you and your friends have decided to sign up for a 21-kilometer half-marathon that takes place every year-end in your city.</p><p>Before signing up for the half marathon, you see that you have two friends who have already started training. How would you react?</p>",
                
                "options": [
                    {'letter': 'A', "text": "I would be discouraged and would not sign up for the half marathon, as I am competitive and would think I am at a disadvantage in this challenge.", "points": 100},
                    {'letter': 'B',"text": "I would try to talk to them. In this sense, it could acquire knowledge and avoid common mistakes when starting a new sport.", "points": 200},
                    {'letter': 'C',"text": "I would enter the competition, but for sure my effort would be less and I would give up on competing healthily with my peers.", "points": 100},
                    {'letter': 'D',"text": "I wouldn't have any problem, I would sign up, start my training and look for my best result without comparing myself.", "points": 200}]
            },
            
            {
                
                "number":2,
                "utterance":"<p>The first week the preparation began. At the end of this week, you notice that you feel pain in certain parts of your body, which could be caused by lack of technique or the simple fact of not having the habit of running. What do you do?</p>",
                
                "options": [
                    {'letter': 'A',"text": "I would share this complaint with my friends, trying to find out how they are doing. If someone were in pain, they would also come to the conclusion that it is something that needs to be analyzed.", "points": 200},
                    {'letter': 'B',"text": "I would share what I'm feeling with my friends but I wouldn't be surprised. I would not research what was actually causing the pain, as I already knew that I would feel pain and that in time it will stop.", "points": 100},
                    {'letter': 'C',"text": "Because I'm starting in sport, the pain would make me research and go after professionals in the field to find out what is happening and how I could avoid them.", "points": 200},
                    {'letter': 'D',"text": "I wouldn't share my grievances with my friends. Besides, I wouldn't go after the reason for the problem.", "points": 100}]
            },
            {
                "number":3,
                "utterance":"<p>Two months have passed since the beginning of training and you realize that the performance of some teammates has been better than yours, in this scenario you:</p>",
                
                "options": [
                    {'letter': 'A',"text": "He continues with his training because he believes he knows everything he is doing, perhaps being able to insist on some mistakes or successes.", "points": 100},
                    {'letter': 'B',"text": "It would dishearten me to see that there are people doing better than me during the process, making me feel threatened by the success of others.", "points": 100},
                    {'letter': 'C',"text": "I would be inspired by those who are doing better than me, trying to replicate what they are doing in their training.", "points": 200},
                    {'letter': 'D',"text": "It seeks to change its training strategy, improving some flaws and facing new challenges, such as a change in eating habits.", "points": 200}]
            }
            ,
            {
                "number":4,
                "utterance":"<p>With 3 months to go before the half-marathon you are faced with a fatality. He was walking down the stairs of a mall when he stepped wrong and ended up spraining his ankle slightly. When going to the doctor, he discovers that he will need to rest for 1 month, necessarily without doing sports. What would you do knowing that there is little time for the day of the event?</p>",
                
                "options": [
                    {'letter': 'A',"text": "I would spend this month of rest, then I would return to my training little by little without much pretense of having a good result in the race, this month off, maybe it could make me disbelieve in my potential to do well in the race.", "points": 100},
                    {'letter': 'B',"text": "I would talk to my colleagues to get their opinion, so I would continue my training in a moderate way just to complete the test.", "points": 200},
                    {'letter': 'C',"text": "I would be sad because I got hurt, but I would look for alternatives to continue the preparation during the rest, so when the period ended I could go back to training and give my best in the race.", "points": 200},
                    {'letter': 'D',"text": "I would give up going to compete, considering that my efforts for months would have been without purpose. I would not run again as I would no longer participate in the half marathon", "points": 100}]
            },
            {
                "number":5,
                "utterance":"<p>On race day a stranger looking to be much more experienced starts criticizing you in different ways, trying to put you down in order to shake your psyche. This unsportsmanlike attitude can ruin an athlete's performance in any sport, however, how would you react?</p>",
                
                "options": [
                    {'letter': 'A',"text": "I wouldn't answer it, considering that I know my capacity and I know how much I tried until the day of the event. On the other hand, it would frustrate me to know that he, from experience, would have a better result.", "points": 200},
                    {'letter': 'B',"text": "I would receive these criticisms and could shake me, given that he is more experienced. In this sense, he could have a worse performance in the race because he would think he was not prepared enough. ", "points": 100},
                    {'letter': 'C',"text": "I would respond by criticizing him in several other ways, seeking to hinder and end the race of my 'opponent'.", "points": 100},
                    {'letter': 'D',"text": "I would receive the criticisms and seek to select the ones that could really be constructive for me. Furthermore, I know that I am capable of having a good result considering my effort and I have dedication.", "points": 200}]
            }

        ]

    },

    {
        "id": 3,
        "name": "Work",
        "menu_img": "img_menu_work.jpg",
        "question_img":"img_quest_work.jpg",
        "description":"You are an employee of a company, and have been working there for 2 years, but you haven't gotten any promotions yet. Your boss needs to be on leave for 3 months, and since your team is small, he asks you to replace him during your absence.",
        "questions":[
            {
                "number":1,
                "utterance":"<p>You are an employee of a company, and have been working there for 2 years, but you haven't gotten any promotions yet. Your boss needs to be on leave for 3 months, and since your team is small, he asks you to replace him during your absence.</p><p>Would you accept this role?</p>",
                
                "options": [
                    {'letter': 'A', "text": "Absolutely yes. ", "points": 200},
                    {'letter': 'B',"text": " Absolutely not.", "points": 100},
                    {'letter': 'C',"text": "Yes, but I would request prior training.", "points": 200},
                    {'letter': 'D',"text": "Yes, however, I would ask another employee to share the functions with me.", "points": 100}]
            },
            
            {
                
                "number":2,
                "utterance":"<p>Once accepted, since you are going to do the work of your boss, who has much higher pay, in addition to your own, you think that maybe you could ask for some kind of compensation in return for the effort.</p><p>What would you plead if you accepted the promotion?</p>",
                
                "options": [
                    {'letter': 'A',"text": "Receive the same salary as the boss during the replacement period. ", "points": 100},
                    {'letter': 'B',"text": "I would not claim anything aiming at future recognition by the company.", "points": 200},
                    {'letter': 'C',"text": "I would request a bonus during the period in which I was performing the function.", "points": 100},
                    {'letter': 'D',"text": "I would request a bonus at the end of the period if your income was satisfactory.", "points": 200}]
            },
            {
                "number":3,
                "utterance":"<p>If a higher remuneration was requested, your request was refused, considering that another more experienced and prepared person could do it in yout place. Also, your boss is years more experience than you, and has been in the position because of years of work.</p><p>Therefore, you:</p>",
                
                "options": [
                    {'letter': 'A',"text": " Apologizes for the lack of respect for the position of his boss and decides to exercise her function without extra remuneration.", "points": 200},
                    {'letter': 'B',"text": "Accept the promotion, but this time you will share the work with another employee.", "points": 200},
                    {'letter': 'C',"text": "Continues refusing the promotion and follows your work normally.", "points": 100},
                    {'letter': 'D',"text": "Talks with co-workers about the subject and decides to still refuse the promotion.", "points": 100}]
            },
            {
                "number":4,
                "utterance":"<p>When you start your job as your boss, you realize that some improvements could be made in your sector, in order to improve its performance and results. However, you need to decide how you are going to do your job.</p><p>Once you accept the function, you would just do:</p>",
                
                "options": [
                    {'letter': 'A',"text": " In the best way possible, exactly the way his boss did without proposing any changes.", "points": 100},
                    {'letter': 'B',"text": "I would do the bare minimum just to make up for the absence of the boss.", "points": 100},
                    {'letter': 'C',"text": " In addition to developing the activities assigned to your boss, you would go further, even proposing changes that would improve the development of your sector's results.", "points": 200},
                    {'letter': 'D',"text": " I would perform his function in the best way, but I would not propose any changes, I would write down my ideas to propose them to my boss when he returned from leave.", "points": 200}]
            },
            {
                "number":5,
                "utterance":"<p>At the end of the 3-month period in the role of your boss, after having proposed changes in the sector that worked out, and made it have an excellent performance during the period, your boss asks to have a conversation with you and is offered some compensation options as a return for good performance:</p><p>What kind of remuneration would you accept?</p>",
                
                "options": [
                    {'letter': 'A',"text": "The assistance of an intern to carry out simpler functions of their normal work as more advanced ones will be under their account from now on.", "points": 200},
                    {'letter': 'B',"text": "Salary increase.", "points": 100},
                    {'letter': 'C',"text": "Monetary bonus.", "points": 100},
                    {'letter': 'D',"text": "Training focused on other more advanced functions, aiming at a future permanent promotion.", "points": 200}]
            }

        ]

    }
    
]


Results = ["<p>Congratulations! Based on your answers you have a <span>Growth Mindset</span>.</p><p>Having a Growth Mindset means that you believe that with effort, dedication and willpower anyone can grow. You don't mind making mistakes as long as you learn from them. Because of this mindset, you are able to develop skills to get what you want. Very open to change, normally you do not get intimidated by unexplored situations. </p><p>Unlike a fixed mindset where everything seems settled and unchanged, in a growth mindset, you seek innovation and risk. Mistakes are always acceptable if they are accompanied by knowledge.</p><p>Some qualities of this mindset are:</p><ul><li>Perseverance in the face of obstacles</li><li>Inspired by the success of others</li><li>Learn from failures</li><li>Do not feel intimidated by challenges</li><li>Feel motivated to learn</li><li>Handles criticism well</li></ul><p>A growth mindset allows you to have a better performance not only at work, but in life. You are much more prepared to handle unpredictable circumstances and know how to act.</p>",
"<p>Based on your answers you have a <span>Fixed Mindset</span> with some growth qualities</p><p>In a fixed mindset, people believe their inherent attributes, such as talent and intelligence, are fixed. A fixed-minded person usually avoids challenges in life, gives up easily, and becomes intimidated or threatened by the success of other people.</p><p>People with a fixed mindset believe attributes and abilities are always fixed and can't change regardless of how much effort you put in.</p><p>Traits of a fixed mindset:</p><ul><li>Believes intelligence and talent is static</li><li>Avoids challenges to avoid failure</li><li>Ignores feedback from others</li><li>Feels threatened by the success of others</li><li>Hides flaws so as not to be judged by others</li><li>Views feedback as personal criticism</li><li>Often gives up easily</li></ul><p>A growth mindset attributes performance to learning. Those who are growth-minded believe that intelligence and talents can be improved through effort and actions. Growth mindset is the belief that intelligence can change and be improved. You have some of these qualities along with your fixed mindset.</p>"]