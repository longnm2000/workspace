/**
 * Trăm trâu, trăm cỏ

Trâu đứng ăn năm

Trâu nằm ăn ba

Lụ khụ trâu già

Ba con một bó
 */

for (let i=1;i<100;i++){
    for (j=1;j<100; j++){
        if(5*i+3*j+(100-i-j)/3==100){
            console.log("Trâu đứng: ",i,"Trâu nằm: ",j,"Trâu già: ", 100-i-j);
        }
    }
}