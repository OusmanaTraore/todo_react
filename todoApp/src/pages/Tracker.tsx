import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useCashTracker, Transaction } from '../hooks/useCashTracker';
import {NumericFormat } from 'react-number-format';

const Tracker: React.FC = () => {
const { getTransactions, getIconForCategory } = useCashTracker();
const [ transactions, setTransactions] = useState<Transaction[]>([]);

useEffect(() => {
    const loadData = async () => {
        const t_data = await getTransactions();
        // console.log(' Data ', t_data);
        setTransactions(t_data);
    }
    loadData();
}, []);


return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Tracker</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent >
            <IonList>
                {transactions.map((trans) => (
                    <IonItem key={trans.id}>
                        <IonIcon slot="start" icon={getIconForCategory(trans.category)}></IonIcon>
                        <IonLabel>
                            <h2>{trans.title}</h2>
                            <p>{new Intl.DateTimeFormat('fr-FR').format(trans.createdAt)}</p>
                        </IonLabel>
                       <IonText slot="end">
                            <NumericFormat value={trans.value} displayType={'text'} prefix={'$'}thousandSeparator= {true}/>
                       </IonText>
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
    </IonPage>
);
};

export default Tracker;



