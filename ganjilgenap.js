const cekganjilgenap=(plat,tanggal)=>{
    var arr=plat.split(' ')
    if((arr[1]%2==0&&tanggal%2==0)||(arr[1]%2===1&&tanggal%2==1)){
        return 'boleh lewat'
    }else{
        return 'tidak boleh'
    }
}


console.log(cekganjilgenap('B 1234 BKV',10))
console.log(cekganjilgenap('B 1235 CKG',10))