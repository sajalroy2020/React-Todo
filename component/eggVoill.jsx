export default function EggVoill({number = 0}){

    if(number >= 100){
        return <p>The egg is boil.</p>
    }
    return <p>The egg is Not boil.</p>
}