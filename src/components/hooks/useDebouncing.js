function useDebouncing(cb,delay=500){ //  delay in ms 
let timerId;
return(...args)=>{
    clearTimeout(timerId);
    timerId=setTimeout(()=>{
        cb(...args)
    },delay)

}

}
export default useDebouncing