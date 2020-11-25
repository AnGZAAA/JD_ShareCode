/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
        '__jdv=122270672%7Cdirect%7C-%7Cnone%7C-%7C1606264482968; __jda=122270672.16062644829671577706889.1606264482.1606264482.1606264482.1; __jdc=122270672; mba_muid=16062644829671577706889; shshshfp=bfaa869efaad5bd3a7b7e62140e0a030; shshshfpa=813869ef-4f43-b87e-ab16-9eb789a79b1a-1606264490; shshshsID=8649728b995205174437481c910929b6_1_1606264490609; shshshfpb=aUmydWH8gfPFSs2Z4qLsULg%3D%3D; 3AB9D23F7A4B3C9B=THZN2C3GQ64HAYALOAOFSSS5J7TOHJM6FKRTYQZCMLKVUKAXP7NWKWUSDTG2HAMBWXQFNSYBBOWUPDLHKC5NT5OEUI; jcap_dvzw_fp=1e2c6dab04c5005ba953b336528383ef$915285059402; TrackerID=kCuH4gMN0ZfJa2ejDVeUzmkvuZEBVEsIOOPHbGzBd_u23NuC22EwcLg2sBqf1j6T8B4VfGtrpI4hl7lg0ZsIWPa_T2SGyFBEXyhvuSKtordV5VN4MDOrIAmKRkiPfduZ-ycY5D2OZj3cSez4koEf-Q; pt_key=AAJfvabGADDIGdYpW2JibOuRA9cH-6vK_fdGgDa-fMO325G17SIHYuyREp8urJxelCMoFvsEKrM; pt_pin=jd_7da9924d92a2c; pt_token=cqftymhr; pwdt_id=jd_7da9924d92a2c; sfstoken=tk01m91aa1c2ca8sM3gxeDF4M3gzwEKk9wS+7s53aA6wB30XGhoM7Q0Psf2szbDKcu0gwHdoiESqkSqsDkQhwpTEUR7Z; whwswswws=; mobilev=html5; __jdb=122270672.3.16062644829671577706889|1.1606264482; mba_sid=16062644829693417188370975306.3', //账号一ck,例:pt_key=XXX;pt_pin=XXX;
        '', //账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
    ]
    // 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
    if (process.env.JD_COOKIE.indexOf('&') > -1) {
        console.log(`您的cookie选择的是用&隔开\n`)
        CookieJDs = process.env.JD_COOKIE.split('&');
    } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
        console.log(`您的cookie选择的是用换行隔开\n`)
        CookieJDs = process.env.JD_COOKIE.split('\n');
    } else {
        CookieJDs = process.env.JD_COOKIE.split();
    }
    console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
    console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
        // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
    const index = (i + 1 === 1) ? '' : (i + 1);
    exports['CookieJD' + index] = CookieJDs[i];
}