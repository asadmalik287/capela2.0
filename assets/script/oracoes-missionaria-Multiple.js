let santoPostsArr = [];
var months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";
var monthNo={
    January:'0',
February:'1',
March:'2',
April:'3',
May:'4',
June:'5',
July:'6',
August:'7',
September:'8',
October:'9',
November:'10',
December:'11'
}
var d = new Date();
var n = months[d.getMonth()];
var nextMonth=d.getMonth()+1;
var nextMonth2=months[nextMonth];
console.log(nextMonth2);
if (nextMonth == 12){
    nextMonth ==1

}
var monthNow=d.getMonth();
// console.log(mainData.oracoesMissionarias[month]);
Object.keys(mainData.oracoesMissionarias).map((month, index) => {
    // console.log(monthNo.index);
    console.log(index);
    Object.keys(mainData.oracoesMissionarias[month]).map((post) => {
        // console.log(post)
        // console.log(mainData.oracoesMissionarias[month][post])
        if (month == n) {
            // console.log("sadsada");
            // mainData.oracoesMissionarias[month][post].date.split(' ')[0] <= new Date().getDate()
            
            if (Array.isArray(mainData.oracoesMissionarias[month][post]) == true) {
                mainData.oracoesMissionarias[month][post].map((subPost) => {
                    if (subPost.date.split(" ")[0] <= new Date().getDate()) {
                        santoPostsArr.push(subPost);
                    }
                });
                console.log(month);
            } 
            else {
                // console.log('C_________L');
                // console.log(mainData.oracoesMissionarias[month][post])
                if (
                    mainData.oracoesMissionarias[month][post].date.split(" ")[0] <=
                    new Date().getDate()
                ) {
                    // console.log(mainData.oracoesMissionarias[month][post]);
                    santoPostsArr.push(mainData.oracoesMissionarias[month][post]);
                }
            }
        }
        else if(nextMonth2 == month) {
			console.log(month + '++++++++' + nextMonth2);
		}
         else {
            if (Array.isArray(mainData.oracoesMissionarias[month][post]) == true) {
                mainData.oracoesMissionarias[month][post].map((subPost) => {
                    santoPostsArr.push(subPost);
                });
            } else {
                santoPostsArr.push(mainData.oracoesMissionarias[month][post]);
            }
        }
    });
    // console.log('--------------------------*****************************')
});
santoPostsArr.reverse();

// console.log(santoPostsArr);

$("#list").pagination({
    // you call the plugin
    dataSource: santoPostsArr, // pass all the data
    pageSize: 7, // put how many items per page you want
    callback: function (data, pagination) {
        // data will be chunk of your data (json.Product) per page
        // that you need to display
        // let html = document.getElementsByTagName('html')
        // console.log(html);
        var wrapper = $("#list .postslist").empty();
        let abc = Array.from(document.getElementsByClassName('paginationjs-page'));
        abc.map((e) => {
           
            e.firstElementChild.setAttribute('href', '#top');
        });
        $.each(data, function (i, post) {
            $("#list .postslist").append(`
      <div>

                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-5 mt-3">
                            <img src="${post.img}" class="img-fluid" alt="">
                        </div>

                        <div class="col-lg-8 col-md-8 col-sm-12 mt-3">

                            
                                <div>
                                    <span class="h5 title-17px GM font-weight">${post.title}</span>
                                </div>
                                <div class="calender-div pt-2 calender-div">
                                    <p> <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                                        <i>${post.date}</i>
                                    </p>
                                </div>
                                <div class="border-1 pt-1"></div>
                                <div class="pt-2">
                                    <p class="GB description">
                                      ${post.details} </p>
                                </div>
                                <div class="pb-2">
                                    <a href="${post.route}">
                                        <button type="button" class="btn-leia-mais">

                                            LEIA MAIS &nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i>

                                        </button>
                                    </a>
                                </div>

                            

                        </div>
                    </div>
                    <div class="border-1 pt-3"></div>
                </div>
    `);
        });
    },
});

