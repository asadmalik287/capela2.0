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

var d = new Date();
var n = months[d.getMonth()];
var nextMonth=d.getMonth()+1;
var nextMonth2=months[nextMonth];
if (nextMonth == 12){
    nextMonth ==1
}
var monthNow=d.getMonth();
Object.keys(mainData.leituraData).map((month, index) => {
	
	if(n == month){}
	
	
	// console.log( 'month ==== '+ month);
	// console.log( 'n === '+ n);

	
	console.log(mainData.leituraData)
	Object.keys(mainData.leituraData[month]).map((post) => {
      
		if (month == n) {
			console.log(month+"===="+n);
			// console.log(n);
			console.log("sadsada");
			mainData.leituraData[month][post].date.split(' ')[0] <= new Date().getDate()

			if (Array.isArray(mainData.leituraData[month][post]) == true) {
				mainData.leituraData[month][post].map((subPost) => {
					if (subPost.date.split(" ")[0] <= new Date().getDate()) {
						santoPostsArr.push(subPost);
					}
				});
			} else {
				if (
					mainData.leituraData[month][post].date.split(" ")[0] <=
					new Date().getDate()
				) {
                    console.log(month)
					console.log(mainData.leituraData[month][post]);
					santoPostsArr.push(mainData.leituraData[month][post]);
				}
			}
		} 
		else if(nextMonth2 == month) {
			console.log(month + '++++++++' + nextMonth2);
		}
		else{
			console.log('**********');
			if (Array.isArray(mainData.leituraData[month][post]) == true) {
				mainData.leituraData[month][post].map((subPost) => {
                    
					santoPostsArr.push(subPost);
				});
			} else {
                // console.log(mainData.leituraData[month][post])
				santoPostsArr.push(mainData.leituraData[month][post]);
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
		let abc = Array.from(document.getElementsByClassName("paginationjs-page"));
		abc.map((e) => {
			e.firstElementChild.setAttribute("href", "#top");
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

// console.log(html);
// let abc = Array.from(document.getElementsByClassName('paginationjs-page'));
// // abc.firstElementChild.setAttribute("id", "gradient");
// // var arr = Array.prototype.slice.call(abc)
// // console.log('child Element', abc)
// abc.map((e) => {
//     e.firstElementChild.setAttribute('href', '#top');
//     // console.log(e.firstElementChild);
// })
