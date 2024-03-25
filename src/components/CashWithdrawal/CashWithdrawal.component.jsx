import "./CashWithdrawal.style.scss";
import { useState } from "react";
import DenominationItem from "../DenominationItem/DenominationItem.component";

export const CashWithdrawal = (props) => {
    const [balance, setBalance] = useState(2000);

    const updateBalance = (value) => {
        setBalance(balance - value);
    }

    const getFirstCharOfName = name => name.slice(0, 1);

    const name = "venkat yashwanth"
    const initial = getFirstCharOfName(name);
    const { denominationsList } = props;

    return (
        <>
            <div className="cash-withdrawal-app-container">
                <div className="cash-withdrawal-container">
                    <div className="user-details-container">
                        <div className="initial-container">
                            <p className="initial">{initial}</p>
                        </div>
                        <p className="username">{name}</p>
                    </div>
                    <div className="balance-container">
                        <p className="your-balance">Your Balance</p>
                        <p className="balance-amount">
                            {balance}
                            <br />
                            <span className="currency">In Rupees</span>
                        </p>
                    </div>
                    <p className="withdraw">Withdraw</p>
                    <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
                    <ul className="denominations-list">
                        {
                            denominationsList.map(eachDenomination => (
                                <DenominationItem
                                    key={eachDenomination.id}
                                    denominationDetails={eachDenomination}
                                    updateBalance={updateBalance}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

