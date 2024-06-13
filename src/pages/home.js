import { useEffect, useState } from "react";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import {v4} from "uuid";


export default function Home() {

    const [actvities, setActivities] = useState(localStorage.getItem("expensetracker") ? JSON.parse(localStorage.getItem("expensetracker")) : []);

    const [remainingCash, setRemainingCash] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [tabValue, setTabValue] = useState("all");
    const [pageState, setpageState] = useState("loading");

    const listDesign = "flex justify-between items-center bg-white p-2";

    const typeAndDate = "flex items-center gap-4";

    // useEffect(() => {
    //     const expenseTrackerList = localStorage.getItem("expensetracker");

    //     if(!expenseTrackerList) {
    //         setActivities([]);
    //     } else {
    //         setActivities(JSON.parse(expenseTrackerList));
    //     }

    // }, []);


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

        localStorage.setItem("expensetracker", JSON.stringify(actvities));

    }, [actvities]);

    // https://web3bridgechallenge.onrender.com

    const [formNaration, setFormNaration] = useState("");
    const [formType, setFormType] = useState("");
    const [formAmount, setFormAmount] = useState("");

    const addExpense = () => {

        if(!formNaration || !formType || !formAmount) {
            alert("Kindly fill the form completely...");
            return;
        }

        setActivities(actvities.concat({
            id: v4(),
            activity: formNaration,
            activityType: formType,
            amount: parseInt(formAmount),
            createdAt: new Date()
        }));

        setFormNaration("");
        setFormAmount("");
        setFormType("");

    }

    const deleteRecord = (id) => {
        const updatedActivity = actvities.filter(activity => activity.id !== id);
        setActivities(updatedActivity);
        localStorage.setItem("expensetracker", JSON.stringify(updatedActivity));
    }

    return (
        <div className="bg-grey flex flex-col gap-2 h-screen mx-auto w-full xl:w-[600px] p-4">

            <div className="flex gap-2 w-full flex-col pb-8">
                <input className="rounded-md py-2" type="text" value={formNaration} onChange={(e) => {setFormNaration(e.target.value)}} placeholder="Enter Naration" />
                <input className="rounded-md py-2" type="number" value={formAmount} onChange={(e) => {setFormAmount(e.target.value)}} placeholder="Enter Amount" />
                <select className="rounded-md py-2" value={formType} onChange={(e) => {setFormType(e.target.value)}}>
                    <option value="">Select Naration Type</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <button className="bg-green text-white py-2 font-bold border-none rounded-md" onClick={addExpense}>Add</button>
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
                <div className="flex p-2 bg-white rounded-md">

                    <button className={`${tabValue == "all" ? "bg-green text-white rounded-md" : "bg-white"}  border-none w-full py-2 font-bold`} onClick={() => { setTabValue("all") }}>All</button>
                    <button className={`${tabValue == "income" ? "bg-green text-white rounded-md" : "bg-white"}  border-none w-full py-2 font-bold`} onClick={() => { setTabValue("income") }}>Income</button>
                    <button className={`${tabValue == "expense" ? "bg-green text-white rounded-md" : "bg-white"}  border-none w-full py-2 font-bold`} onClick={() => { setTabValue("expense") }}>Expense</button>
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
                                    <div onClick={() => {deleteRecord(activity.id)}}><MdDelete className="text-lg text-red" /></div>
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
                                    <div onClick={() => {deleteRecord(activity.id)}}><MdDelete className="text-lg text-red" /></div>
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
                                    <div onClick={() => {deleteRecord(activity.id)}}><MdDelete className="text-lg text-red" /></div>
                                </div>
                            </div>
                        );
                    }))}
                </div>
                <div className={`${actvities.length == 0 && pageState == "idle" ? "block text-center py-4": "hidden"}`}>
                    No record
                </div>
            </div>
        </div>
    );
}