import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Club, getAllClubs} from "../../data/club";
import {Card, Collapse} from "antd";
import {Link} from "react-router-dom";
import {HorizontalSpacer} from "../../pages/discovery";
import CollapsePanel from "antd/es/collapse/CollapsePanel";

const DiscoveryClub: React.FC = () => {
    let key = 0;
    const {t} = useTranslation('discovery');
    const [clubs, setClubs] = useState<Club[]>([]);
    const [nbOfClubs, setNbOfClubs] = useState<number>(0);

    const initClubs = () => {
        getAllClubs().then(res => {
            setClubs(res.data);
            setNbOfClubs(res.data.length);
        });
    };
    useEffect(() => initClubs(), []);

    const CustomClubCard = (props: any) => (
        <div className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 text-center content-end my-2">
            <Card hoverable className="rounded-lg shadow-xl hover:shadow-outline h-full mx-1"
                  cover={<Link to={`/club/${props.club.id}`}>
                      <img className="rounded-t-lg mx-auto w-full h-full" alt={props.club.name}
                           src={props.club.logoUrl}/></Link>}>
                <Collapse className="font-bold mt-2 text-sm sm:text-xl rounded-t-lg"
                          expandIconPosition="right" bordered={false}>
                    <CollapsePanel key={1} header={props.club.name} className="rounded-b-lg">
                        <p className="text-xs sm:text-sm">{props.club.description}</p>
                    </CollapsePanel>
                </Collapse>
            </Card>
        </div>
    );

    return (
        <div className="container text-center mx-auto my-5">
            <div
                className="flex justify-center items-center font-bold text-indigo-500 py-3 text-4xl">
                {t('associations')}
                <span
                    className="flex ml-2 text-lg">{(nbOfClubs !== 0) ? `(${nbOfClubs})` : ""}</span>
            </div>
            <HorizontalSpacer spacing={6}/>
            {/* List of Clubs */}
            <div className="flex flex-wrap justify-start">
                {
                    clubs.map(club => {
                        return (<CustomClubCard key={key++} club={club}/>);
                    })
                }
            </div>
        </div>
    );
};

export default DiscoveryClub;