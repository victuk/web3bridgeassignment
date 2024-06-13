import { useEffect, useState } from "react";
import moment from "moment";


export default function Home() {

    const [actvities, setActivities] = useState([
        {
            activity: "Receive Salary",
            activityType: "income",
            amount: 200000,
            createdAt: new Date()
        },
        {
            activity: "Side hustle",
            activityType: "income",
            amount: 30000,
            createdAt: new Date()
        },
        {
            activity: "Suya",
            activityType: "expense",
            amount: 5000,
            createdAt: new Date()
        }
    ]);

    const [remainingCash, setRemainingCash] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [tabValue, setTabValue] = useState("all");
    const [pageState, setpageState] = useState("loading");

    const listDesign = "flex justify-between items-center bg-white p-2";

    const typeAndDate = "flex flex-col"


    useEffect(() => {
        let totalExpenseCalculated = 0;
        let totalIncomeCalculated = 0;
        let remainingCashCalculated = 0;

        for (let activity of actvities) {
            if(activity.activityType == "income") {
                totalIncomeCalculated += activity.amount
            } else if (activity.activityType == "expense") {
                totalExpenseCalculated += activity.amount
            }
        }

        remainingCashCalculated = totalIncomeCalculated - totalExpenseCalculated;

        setTotalIncome(totalIncomeCalculated);
        setTotalExpense(totalExpenseCalculated);
        setRemainingCash(remainingCashCalculated);
        setpageState("idle");


    }, [actvities]);

    // https://web3bridgechallenge.onrender.com

    const [formNaration, setFormNaration] = useState("");
    const [formType, setFormType] = useState("");
    const [formAmount, setFormAmount] = useState("");

    const addExpense = () => {
        setActivities(actvities.concat({
            activity: formNaration,
            activityType: formType,
            amount: parseInt(formAmount),
            createdAt: new Date()
        }))
    }

    return (
        <div className="bg-grey flex flex-col gap-2 h-screen mx-auto w-full xl:w-[600px] p-4">

            <div className="flex gap-2">
                <input onChange={(e) => {setFormNaration(e.target.value)}} />
                <input onChange={(e) => {setFormAmount(e.target.value)}} />
                <select onChange={(e) => {setFormType(e.target.value)}}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <button onClick={addExpense}>Add</button>
            </div>

            <div className="flex gap-2">
                <div className="bg-white rounded-md p-2 w-full">
                    <div className="text-sm font-bold">Cash Left</div>
                    <div className="font-bold text-xl">N{remainingCash.toLocaleString()}</div>
                </div>
                <div className="bg-white rounded-md p-2 w-full">
                    <div className="text-sm font-bold">Total Income</div>
                    <div className="font-bold text-green text-xl">N{totalIncome.toLocaleString()}</div>
                </div>
                <div className="bg-white rounded-md p-2 w-full">
                    <div className="text-sm font-bold">Total Expense</div>
                    <div className="font-bold text-red text-xl">N{totalExpense.toLocaleString()}</div>
                </div>
            </div>
            <div>
                <div className="flex">

                    <button className="bg-white border-none w-full py-4 font-bold" onClick={() => { setTabValue("all") }}>All Activities</button>
                    <button className="bg-white border-none w-full py-4 font-bold" onClick={() => { setTabValue("income") }}>Income</button>
                    <button className="bg-white border-none w-full py-4 font-bold" onClick={() => { setTabValue("expense") }}>Expense</button>
                </div>
                <div className={`${actvities.length == 0 && pageState == "idle" ? "hidden": "flex flex-col gap-2 py-2"}`}>
                    {tabValue == "all" && (actvities.map((activity, index) => {
                        return (
                            <div className={listDesign}>
                                <div>
                                    <div>{activity.activity}</div>
                                    <div className="text-xs text-[#a3a3a3]">{moment(activity.createdAt).format("LLLL")}</div>
                                </div>
                                <div className={typeAndDate}>
                                    <div className={`${activity.activityType == "income" ? "text-green" : "text-red"} w-fit rounded-lg px-2 text-[25px] font-bold`}>{activity.activityType == "income" ? "+" : "-"}{activity.amount.toLocaleString()}</div>
                                    
                                </div>
                            </div>
                        );
                    }))}

                    {tabValue == "income" && (actvities.filter(activity => activity.activityType == "income").map((activity, index) => {
                        return (
                            <div className={listDesign}>
                                <div>
                                    <div>{activity.activity}</div>
                                    <div className="text-xs text-[#a3a3a3]">{moment(activity.createdAt).format("LLLL")}</div>
                                </div>
                                <div className={typeAndDate}>
                                    <div className={`${activity.activityType == "income" ? "text-green" : "text-red"} w-fit rounded-lg px-2 text-[25px] font-bold`}>{activity.activityType == "income" ? "+" : "-"}{activity.amount.toLocaleString()}</div>
                                    
                                </div>
                            </div>
                        );
                    }))}

                    {tabValue == "expense" && (actvities.filter(activity => activity.activityType == "expense").map((activity, index) => {
                        return (
                            <div className={listDesign}>
                                <div>
                                    <div>{activity.activity}</div>
                                    <div className="text-xs text-[#a3a3a3]">{moment(activity.createdAt).format("LLLL")}</div>
                                </div>
                                <div className={typeAndDate}>
                                    <div className={`${activity.activityType == "income" ? "text-green" : "text-red"} w-fit rounded-lg px-2 text-[25px] font-bold`}>{activity.activityType == "income" ? "+" : "-"}{activity.amount.toLocaleString()}</div>
                                    
                                </div>
                            </div>
                        );
                    }))}

                </div>
            </div>
        </div>
    );
}