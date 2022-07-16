let flag1=0,flag2=0,flag3=0,flag4=0,flag5=0,flag6=0;
        let total_over=prompt("Enter Total over of the match");
        let balls=total_over*6;
        let target=prompt("Enter the target")
        let Target=document.querySelector('.target')
        Target.textContent=target

        let Remaining=document.querySelector('.Remaining_Ball')
        
       
        let num=document.querySelectorAll('.num');
        let run=document.querySelector('.run')
        let Wc=document.querySelector('.Wicket')
        let Ov=document.querySelector('.over')
        let Ball=document.querySelector('.ball')
        let ball=0;
        let score=0;
        let over=0;
        let wicket=0;
        let temp;
       //Event1
        Remaining.textContent=balls
        Array.from(num).forEach((button)=>{
            button.addEventListener('click',function (e) {
                temp=(Number)(e.target.innerHTML)
                score=score+(Number)(e.target.innerHTML);
                ball++;
                balls--;
                if (ball==6) {
                    over++; 
                    ball=0;
                }

                run.textContent=score;
                Ov.textContent=over;
                Ball.textContent=ball;
                Remaining.textContent=balls
                Target.textContent=target-score

                flag1=1;
                flag2=flag3=flag4=flag5=flag6=0;
                valid();
            })
        })
        //Event2
        let WD=document.querySelector('.WD');
        WD.addEventListener('click',function (e) {
            let extra_run=prompt("Enter extra run if not than 0");
            temp=(Number)(extra_run)
            score=score+(Number)(extra_run)+(Number)(1);  
            run.textContent=score;
        Ov.textContent=over;
        Ball.textContent=ball;
        Remaining.textContent=balls
        Target.textContent=target-score
              flag2=1;
                flag1=flag3=flag4=flag5=flag6=0;
                valid()
                
        })
        //Event3

        let NB=document.querySelector('.NB');
        NB.addEventListener('click',function (e) {
        let extra_run=prompt("Enter extra run if not than 0");
        temp=(Number)(extra_run)
        score=score+(Number)(extra_run)+(Number)1;  
        run.textContent=score;
        Ov.textContent=over;
        Ball.textContent=ball;
        Remaining.textContent=balls
        Target.textContent=target-score
        flag3=1;
                flag1=flag3=flag4=flag5=flag6=0;
                valid()
        })
        //Event4
        let out=document.querySelector('.out')
        out.addEventListener('click',function () {
            wicket++;
            ball++;
                balls--;
                if (ball==6) {
                    over++; 
                    ball=0;
                }

                run.textContent=score;
                Ov.textContent=over;
                Ball.textContent=ball;
                Remaining.textContent=balls
                Target.textContent=target-score
                Wc.textContent=wicket
                flag4=1;
                flag1=flag3=flag2=flag5=flag6=0;
                valid()
            
        })
        //Event5
        let LB=document.querySelector('.LB');
        LB.addEventListener('click',function (e) {
        let extra_run=prompt("Enter extra run if not than 0");
        temp=(Number)(extra_run)
        score=score+(Number)(extra_run); 
        ball++;
                balls--;
                if (ball==6) {
                    over++; 
                    ball=0;
                }
        run.textContent=score;
        Ov.textContent=over;
        Ball.textContent=ball;
        Remaining.textContent=balls
        Target.textContent=target-score
        flag5=1;
                flag1=flag3=flag4=flag2=flag6=0;
                valid()
        })
        //Event6
        let BYE=document.querySelector('.BYE');
        BYE.addEventListener('click',function (e) {
        let extra_run=prompt("Enter extra run if not than 0");
        score=score+(Number)(extra_run); 
        ball++;
                balls--;
                if (ball==6) {
                    over++; 
                    ball=0;
                }
        run.textContent=score;
        Ov.textContent=over;
        Ball.textContent=ball;
        Remaining.textContent=balls
        Target.textContent=target-score
        flag6=1;
                flag1=flag3=flag4=flag5=flag2=0;
                valid()
        })

        let undo=document.querySelector('.undo')
        undo.addEventListener('click',function (e) {
            if (balls==total_over*6) {
                alert("Undo is not possible")
                
            }
            else if (flag1==1) {
                score=score-temp;
                if (ball==0) {
                    over--; 
                    ball=6;
                    
                }

                ball--;
                balls++;
               

                run.textContent=score;
                Ov.textContent=over;
                Ball.textContent=ball;
                Remaining.textContent=balls
                Target.textContent=target-score
            }
            else if (flag2==1 || flag3==1) {
                score=score-temp;
                run.textContent=score;
        Ov.textContent=over;
        Ball.textContent=ball;
        Remaining.textContent=balls
        Target.textContent=target-score
            }
            else if (flag4==1) {
                if (ball==0) {
                    over--; 
                    ball=6;
                    
                }
                wicket--;
            ball--;
                balls++;
                

                run.textContent=score;
                Ov.textContent=over;
                Ball.textContent=ball;
                Remaining.textContent=balls
                Target.textContent=target-score
                Wc.textContent=wicket
            }

            else if (flag5==1 || flag6==1) {
                score=score-temp;
                if (ball==0) {
                    over--; 
                    ball=6;
                    
                }
                ball--;
                balls++;
                
        run.textContent=score;
        Ov.textContent=over;
        Ball.textContent=ball;
        Remaining.textContent=balls
        Target.textContent=target-score
            }
        })

        function valid() {

            
            if (target<=score) {
           
           flag1=flag2=flag3=flag4=flag5=flag6=0
           total_over=0;
           balls=0;
           target=0;
           Target.textContent=0;
           Remaining.textContent=0;
            num.textContent=0;
        run.textContent=0;
        Wc.textContent=0;
        Ov.textContent=0;
       Ball.textContent=0;
        ball=0;
        score=0;
        over=0;
        wicket=0;
        temp=0;
        alert("Win the match");


       }
       if ((balls==0 && score<target) || (wicket==10 && score<target)) {
           flag1=flag2=flag3=flag4=flag5=flag6=0
           total_over=0;
           balls=0;
           target=0;
           Target.textContent=0;
           Remaining.textContent=0;
            num.textContent=0;
        run.textContent=0;
        Wc.textContent=0;
        Ov.textContent=0;
       Ball.textContent=0;
        ball=0;
        score=0;
        over=0;
        wicket=0;
        temp=0;
           alert("You loss the match")
       }
            
        }
