

function insert() {
	//添加一行数据
	var IncomeRecord = Bmob.Object.extend("tb_incomeRecord");
	var incomeRecord = new IncomeRecord();
	incomeRecord.save({
		incomeType: $("#inputType").val(),
		incomeOthertype: $("#inputOthertype").val(),
		incomeDate: $("#inputDate").val(),
		updateTime: new Date(),
		incomeNum: Number($("#inputNumber").val())
	}, {
		success: function(object) {
			toastr.info('添加成功');
			window.location.href = 'display.html';
		},
		error: function(model, error) {
			toastr.error('添加失败');
		}
	});
}

// function delete() {
// 	//添加一行数据
// 	var IncomeRecord = Bmob.Object.extend("tb_incomeRecord");
// 	var incomeRecord = new IncomeRecord();
// 	incomeRecord.save({
// 		incomeType: $("#inputType").val(),
// 		incomeOthertype: $("#inputOthertype").val(),
// 		incomeDate: $("#inputDate").val(),
// 		updateTime: new Date(),
// 		incomeNum: Number($("#inputNumber").val())
// 	}, {
// 		success: function(object) {
// 			alert("SUCCESS");
// 		},
// 		error: function(model, error) {
// 			alert("ERROR");
// 		}
// 	});
// }

function delete_incomeRecord(objectId) {
	//删除一行数据
	var moneyRecord = Bmob.Object.extend("tb_money");
	var query = new Bmob.Query(moneyRecord);
	query.get(objectId, {
		success: function(object) {
			// The object was retrieved successfully.
			object.destroy({
				success: function(deleteObject) {
					toastr.info('删除成功');
					location.reload();
				},
				error: function(GameScoretest, error) {
					toastr.error('删除失败');
				}
			});
		},
		error: function(object, error) {
			toastr.error('删除失败');
		}
	});
}

function find_money() {
	//获取数据
	var moneyRecord = Bmob.Object.extend("tb_money");
	var query = new Bmob.Query(moneyRecord);
	query.find({
		success: function(results) {
			// The object was retrieved successfully.
			//alert("共查询到 " + results.length + " 条记录");
			//alert(results[0].get("objectId"));
			$("quantity").append("共查询到 " + results.length + " 条记录");
			var html = "";
			//results.sort(function(a, b){return a.incomeDate-b.incomeDate});
			for (var i = 0; i < results.length; i++) {
				var sum = results[i].get("chinabank") + results[i].get("pinanbank")
				+ results[i].get("zhifubao") + results[i].get("wechatwallet")
				if (i == 0) {
					$("#content").append("<td>" + results[i].get("time") + "</td>" +
						"<td>" + results[i].get("chinabank") + "</td>" +
						"<td>" + results[i].get("pinanbank") + "</td>" +
						"<td>" + results[i].get("zhifubao") + "</td>" +
						"<td>" + results[i].get("wechatwallet") + "</td>" +
						"<td>" + sum + "</td>" +
						"<td><button type='button' class='btn btn-warning btn-xs' onclick='alter()'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button> " +
						"<button type='button' class='btn btn-danger btn-xs' onclick='delete_incomeRecord(" + results[i].get("objectId") + 
						")'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button></td>");
				} else {
					$("#content").after("<tr><td>" + results[i].get("time") + "</td>" +
						"<td>" + results[i].get("chinabank") + "</td>" +
						"<td>" + results[i].get("pinanbank") + "</td>" +
						"<td>" + results[i].get("zhifubao") + "</td>" +
						"<td>" + results[i].get("wechatwallet") + "</td>" +
						"<td>" + sum + "</td>" +
						"<td><button type='button' class='btn btn-warning btn-xs' onclick='alter()'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></button> " +
						"<button type='button' class='btn btn-danger btn-xs' onclick='delete_incomeRecord(" + results[i].get("objectId") + 
						")'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button></td></tr>");
				}

			}
			toastr.info('加载成功');
		},
		error: function(object, error) {
			toastr.error('加载失败');
		}
	});
}

// function update() {
// 	//修改一行数据
// 	var GameScore = Bmob.Object.extend("GameScore");
// 	var query = new Bmob.Query(GameScore);
// 	query.get("4edc3f6ee9", {
// 	  success: function(object) {
// 	    // The object was retrieved successfully.
// 	    object.set("score", 1338);
// 	    object.save(null, {
// 	      success: function(objectUpdate) {
// 	        alert("create object success, object score:"+objectUpdate.get("score"));
// 	      },
// 	      error: function(model, error) {
// 	        alert("create object fail");
// 	      }
// 	    });
// 	  },
// 	  error: function(object, error) {
// 	    alert("query object fail");
// 	  }
// 	});
// };


