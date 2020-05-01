import React from 'react';
import { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonText,
    IonIcon,
} from '@ionic/react';

import { alertOutline, chevronForwardOutline } from 'ionicons/icons';

const PoliciesCard: React.FC<{
    title: string,
    subtitle1: string,
    subtitle2: string,
    c1: string,
    c2: string,
    c3: string,
    c4: string,
    d1: string,
    d2: string,
    d3: string,
    d4: string,
    promo: boolean
}> = (props) => {
    return(
        <IonCard color="sunlife-white" style={{ border: props.promo === true ? '1px solid #EAAB00' : 'none' }}>
            <IonCardHeader className="ion-no-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonText color="sunlife-secondary-text"><h4 className="ion-no-margin"><b>{props.title}</b></h4></IonText>
                            <IonText color="sunlife-primary-text"><p className="ion-no-margin">{props.subtitle1}</p></IonText>
                            <IonText color="sunlife-primary-text"><p className="ion-no-margin">{props.subtitle2}</p></IonText>
                        </IonCol>

                        <IonCol className="ion-align-self-center ion-text-end" size="2">
                            <IonIcon color="sunlife-coverage-arrow" size="large" icon={ chevronForwardOutline }></IonIcon>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardHeader>

            <IonCardContent className="ion-no-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-start ion-no-padding" style={ paddingLeft }>
                            <IonText color="sunlife-tertiary-text"><p>{props.c1}</p></IonText>
                        </IonCol>
                        <IonCol className="ion-text-end ion-no-padding" style={ paddingRight } size="7">
                            <IonText color="sunlife-tertiary-text"><p>{props.d1}</p></IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol className="ion-text-start ion-no-padding" style={ paddingLeft }>
                            <IonText color="sunlife-tertiary-text"><p>{props.c2}</p></IonText>
                        </IonCol>
                        <IonCol className="ion-text-end ion-no-padding" style={ paddingRight } size="7">
                            <IonText color="sunlife-tertiary-text"><p>{props.d2}</p></IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol className="ion-text-start ion-no-padding" style={ paddingLeft }>
                            <IonText color="sunlife-tertiary-text"><p>{props.c3}</p></IonText>
                        </IonCol>
                        <IonCol className="ion-text-end ion-align-self-end ion-no-padding" style={ paddingRight } size="7">
                            <IonText color="sunlife-tertiary-text"><p>{props.d3}</p></IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol className="ion-text-start ion-no-padding" style={ paddingLeftBottom }>
                            <IonText color="sunlife-tertiary-text"><p>{props.c4}</p></IonText>
                        </IonCol>
                        <IonCol className="ion-text-end ion-align-self-end ion-no-padding" style={ paddingRightBottom } size="7">
                            <IonText color="sunlife-tertiary-text"><p>{props.d4}</p></IonText>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
            
            {props.promo === true ? 
                <IonCardContent className="ion-no-padding" style={{ borderTop: "1px solid #EAAB00" }}>
                    <IonGrid className="ion-no-padding">
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center" size="1.2" style={{ background: "#EAAB00", display: "flex", justifyContent: "center" }}>
                                <IonIcon color="sunlife-white" icon={ alertOutline } size="large"></IonIcon>
                            </IonCol>
                            <IonCol size="0.3" />
                            <IonCol>
                                <IonText color="sunlife-yellow"><h2>Premium of HKD 1,280.90 due in 3 days</h2></IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
                :
                null
            }
        </IonCard>
    );
}

// const paddingTop = {
//     padding: "5px 0 0 0"
// }

const paddingRight = {
    padding: "0 5px 0 0"
}

const paddingLeftBottom = {
    padding: "0 0 5px 5px"
}

const paddingRightBottom = {
    padding: "0 5px 5px 0"
}

const paddingLeft = {
    padding: "0 0 0 5px"
}

export default PoliciesCard;