

const initState ={

data:[],
count:1

}

export default function DataReducer(state=initState,action){

   
    const { type, payload } = action;
    switch (type) {
        case 'ADD_DATA':
        const count1 =state.count +1 
            const data2 = [...state.data, payload];
            return {
               
                data: data2,
                count : count1
            };
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
