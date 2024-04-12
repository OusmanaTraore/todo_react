import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { settingsOutline, cashOutline } from 'ionicons/icons'; 
import Tracker from './Tracker';
import Reglages from './Settings';
import { Redirect, Route } from 'react-router';

const Menu: React.FC = () => {
const paths = [
    {name: 'Tracker', url:'/tracker', icon:cashOutline},
    {name: 'Reglages', url:'/reglages', icon:settingsOutline},

]

return (
    <IonPage>
    <IonSplitPane contentId="main">
    <IonMenu contentId="main">
    <IonHeader>
            <IonToolbar>
                <IonTitle>TASKS</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            {paths.map((item,index) => (
                <IonMenuToggle key={index} autoHide={false}>
                    <IonItem routerLink={item.url} routerDirection="forward">
                        <IonIcon icon={item.icon} slot="start"></IonIcon>
                        {item.name} 
                    </IonItem>
                </IonMenuToggle>
            ))}
        </IonContent>
    </IonMenu>
    <IonRouterOutlet id="main">
    <Route exact path="/tracker" component={Tracker}/>
    <Route exact path="/reglages" component={Reglages}/>
    <Route exact path="/">
        <Redirect to="/reglages" />
        </Route>
    </IonRouterOutlet>
    </IonSplitPane>
    </IonPage>
);
};

export default Menu;