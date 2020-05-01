import React from 'react';
import { 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonBackButton, 
    IonTitle,
    IonText, 
} from '@ionic/react';

import PoliciesCard from './PoliciesCard';
import policiesCardData from '../../datas/policiesCardData';

const Policies: React.FC = () => {
    const cardComp = policiesCardData.map((item) => {
        // console.log("DATA: " + item.item);
        return(
            <PoliciesCard 
                key={item.id} 
                title={item.title} 
                subtitle1={item.subtitle1}
                subtitle2={item.subtitle2}
                c1={item.c1}
                c2={item.c2}
                c3={item.c3}
                c4={item.c4}
                d1={item.d1}
                d2={item.d2}
                d3={item.d3}
                d4={item.d4}
                promo={item.promo}
            />
        );
    });

    return(
        <React.Fragment>
            {/* <IonHeader className="ion-no-border">
                <IonToolbar color="sunlife-yellow" style={policiesToolbarStyle}>
                    <IonButtons slot="start">
                        <IonBackButton color="sunlife-primary-text" defaultHref="/" />
                    </IonButtons>
                    <IonTitle color="sunlife-primary-text">All Policies</IonTitle>
                </IonToolbar>
            </IonHeader> */}

            <IonContent color="sunlife-gray">
                <IonHeader className="ion-no-border">
                    <IonToolbar color="sunlife-yellow" style={policiesToolbarStyle}>
                        <IonButtons slot="start">
                            <IonBackButton color="sunlife-primary-text" defaultHref="/" />
                        </IonButtons>
                        <IonTitle color="sunlife-primary-text">All Policies</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {cardComp}
                <IonText color="sunlife-tertiary-text" className="ion-text-center">
                    <p style={legalStyle}>*excluding pending fund transactions</p>
                </IonText>
            </IonContent>
        </React.Fragment>
    );
}

const legalStyle = {
    fontSize: '12px',
    padding: '5px 0 10px 0'
}

const policiesToolbarStyle = {
    paddingTop: '10px'
}

export default Policies;