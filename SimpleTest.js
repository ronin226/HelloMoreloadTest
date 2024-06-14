import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
    vus: 10,
    duration: '30s',
};
export default function () {
    let  counter = 0;
    if(counter%5==0){
        http.get('http://127.0.0.1:8050/moreload');
        sleep(1);
    }else{
    http.get('http://127.0.0.1:8050/index');
    sleep(1);}
    counter+=1;
}