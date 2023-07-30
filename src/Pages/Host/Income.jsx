import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";


export default function Income(){
    let isLogged = localStorage.getItem("isLogged") || false;
    let [myIncome, setMyIncome] = useState([]);
    let [monthIncome, setIncome] = useState({
        firstTab: "0%",
        secondTab: "0%",
        thirdTab: "0%",
        fourthTab: "0%",
        fifthTab: "0%",
        sxithTab: "0%"
    })

    let genNum = Math.floor(Math.random() * 10);

    let func = useOutletContext()

    function createIncome(){

        let LS = JSON.parse(localStorage.getItem("incomeTab")) || [];
        let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let currMonth = new Date().getMonth();
        
        let income_Tab;
        
        if(LS.length <= 0){
            
            let allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
            let lastSixMonth = [];
        
            if(currMonth < 5){
                for(let i = currMonth; i >= 0; i--){
                    lastSixMonth.push(allMonths[i])
                }
            }else{
                for(let i = currMonth; i >= 0; i--){
                    if(lastSixMonth.length === 6){
                        continue;
                    }else{
                        lastSixMonth.push(allMonths[i])
                    }
                }
            }
        
            let realData = []
        
            let mthObj = {};
        
            lastSixMonth.forEach((mth) => {
                mthObj[mth] = `${Math.floor(Math.random() * 3 + 2)}`;
                realData.push(mthObj);
                mthObj = {}
            })
        
            income_Tab = realData;
            localStorage.setItem("incomeTab", JSON.stringify(realData));
        
        }else if (LS.length < 6 && currMonth <= 5){
        
            let oldUpdate = LS;
            let mth = allMonths[currMonth]
            let mthObj = {};
            mthObj[mth] =  `${Math.floor(Math.random() * 3 + 2)}`
            oldUpdate = [mthObj, ...oldUpdate];
        
            localStorage.setItem("incomeTab", JSON.stringify(oldUpdate))
            income_Tab = oldUpdate;
        
        }else if(currMonth > 5 && LS.length == 6){
            let inIncome = LS.map((item) => {
                let obk = Object.keys(item)
                return obk[0]
            });
            
            if(inIncome.includes(allMonths[currMonth])){
                income_Tab = LS;
            }else{
                let oldUpdate = LS;
                oldUpdate.pop();
                let mthObj = {};
                let mth = allMonths[currMonth];
                mthObj[mth] =  `${Math.floor(Math.random() * 3 + 2)}`;
        
                oldUpdate = [mthObj, ...oldUpdate];
        
                localStorage.setItem("incomeTab", JSON.stringify(oldUpdate));
                income_Tab = oldUpdate
            }
        }
    
        return income_Tab
    }

    useEffect(() => {
        if(isLogged){
            setMyIncome(createIncome().reverse())
        }
        func()
    }, [genNum])

    let fixInc = monthIncome;

    myIncome.map((tax, i) => {
        let num = parseFloat(tax[Object.keys(tax)[0]]);
        let percent = num * 20;
        let tabs = ["firstTab", "secondTab", "thirdTab", "fourthTab", "fifthTab", "sxithTab"];
        let currTab = tabs[i];  

        for(let inc in fixInc){
            if(inc == currTab){
                fixInc[inc] = `${percent}%`
            }
        }

    })
    
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    let currMonthIndex = (new Date().getMonth());
    let mappedMnth = [];
    
    for(let i = currMonthIndex; i >= 0; i--){
        if(mappedMnth.length >= 6)continue;
        mappedMnth.push(months[i])
    }

    let bluePrint = mappedMnth.reverse();

    let x_Axis = bluePrint.map((data) => {
        return (
            <div key={data} className="states">{data}</div>
        )
    })



    return(
        <section className="host_income_user">

            <div className="user_income_watch_head">Income</div>

            <div className="user_income_acticity">last <span className="user_underLine">30 days</span> </div>

            <div className="user_total_income_incurred">$2,260</div>

            <div className="plottedGraph">

                <div className="graph1">
                    <span className="0k amount_gotten">5k</span>
                    <span className="0k amount_gotten">4k</span>
                    <span className="0k amount_gotten">3k</span>
                    <span className="0k amount_gotten">2k</span>
                    <span className="0k amount_gotten">1k</span>
                    <span className="0k amount_gotten">0k</span>
                </div>

                <div className="graph2">
                    <span className="y-axis">
                        <span className="spacer_line"></span>
                        <span className="spacer_line"></span>
                        <span className="spacer_line"></span>
                        <span className="spacer_line"></span>
                        <span className="spacer_line"></span>
                        <span className="spacer_line"></span>


                        <div className="tab sixthTab" style={{height : monthIncome.sxithTab, 
                            transition: `height 2s linear 7.5s`}}></div>
                        <div className="tab fifthTab" style={{height : monthIncome.fifthTab, 
                            transition: `height 2s linear 6.5s`}}></div>
                        <div className="tab fourthTab" style={{height : monthIncome.fourthTab,
                            transition: `height 2s linear 5.5s`}}></div>
                        <div className="tab thirdTab" style={{height : monthIncome.thirdTab, 
                            transition: `height 2s linear 4.5s`}}></div>
                        <div className="tab secondTab" style={{height : monthIncome.secondTab,
                            transition: `height 2s linear 3.5s`}}></div>
                        <div className="tab firstTab" style={{height : monthIncome.firstTab,
                            transition: `height 2s linear 2.5s`}}></div>
                        
                    </span>
                    <span className="x-axis">
                        {x_Axis}
                    </span>
                </div>

            </div>

            <div className="user_transaction_acticity_cont">

                <div className="user_acticity_header">
                    <div className="user_acticity_head">Your transaction <span className="howMany">(3)</span></div>
                    <div className="view_other_user-activity_income">Last <span className="user_underLine">30 days</span> </div>
                </div>

                <div className="user_expenditure_cont">

                    <div className="each_income-expenditure_user">
                        <div className="user_expenditure_in-out">$720</div>
                        <div className="user_expenditure_in-out_date">1/11/23</div>
                    </div>

                    <div className="each_income-expenditure_user">
                        <div className="user_expenditure_in-out">$560</div>
                        <div className="user_expenditure_in-out_date">10/11/23</div>
                    </div>

                    <div className="each_income-expenditure_user">
                        <div className="user_expenditure_in-out">$980</div>
                        <div className="user_expenditure_in-out_date">23/11/23</div>
                    </div>

                </div>

            </div>

        </section>
    )
}