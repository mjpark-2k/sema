import axios from 'axios'

import api from '@/state/data.json';

export async function getData(){
    let exhibition, education, collection;

        exhibition = api.exhibition.ListExhibitionOfSeoulMOAInfo.row;
        education = api.education.ListEducationOfSeoulMOAInfo.row;
        collection = api.collection.SemaPsgudInfoKorInfo.row;

    return {exhibition, education, collection};
}
