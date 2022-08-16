

const initState ={
url:[],
data:[],
count:1

}

export default function DataReducer(state=initState,action){

   
    const { type, payload } = action;
    switch (type) {
        case 'ADD_DATA':
        const count1 =state.count +1 
            const data2 = [...state.data, payload];
            const url2 =[...state.url,payload.url]
            return {
               url:url2,
                data: data2,
                count : count1
            };

        case 'REMOVE_URL':
        const count3 = state.count - 1;
            // const people3 = state.people.filter((person) => person !== payload)
            const data3 = state.data.filter((data, idx) => idx !== payload)
            const url3 = state.url.filter((url, idx) => idx !== payload)

            return {
                count: count3,
                data: data3,
                url:url3
            }; 
            case 'EMPTY_DATA':
                return ({url:[],
                    data:[],
                    count:0})
                    
                    
                         
            default :
            return state
}


}

export const addData=(response)=>{

    return{

type:'ADD_DATA' ,
payload:response

    }
}
export const removeUrl =(idx) => {
    return {
        type: 'REMOVE_URL',
        payload: idx
    }
}
export const emptyAction = () => {
    return {
        type: 'EMPTY_DATA',
    }
}