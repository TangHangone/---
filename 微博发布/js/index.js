
			var btn=document.getElementById("btn"),
				box=document.getElementById("box"),
				modal=document.querySelector("html"),
				A1= box.querySelector(".A1"),
				content =box.querySelector(".content") ,
				user =box.querySelector(".user");
			//弹框居中
			
			//点击出现弹框	
			btn.onclick=function(){
				box.style.display="block";
				modal.className="modal";
			}
			//点× 取消弹框
			A1.onclick=function(){
				box.style.display="none";
				modal.classList.remove("modal"); 
			}
			//移动弹框
			
			//发布内容
			var pub= box.querySelector(".pub");
			pub.onclick=function(){
				console.log( user.innerhtml);
				
				if(confirm("确定发布吗")){
				box.style.display="none";
				document.write(user.value +  content.value); 
			}
			//右键取消
			var ul = document.createElement("ul");
			document.oncontextmenu = function (e) {
				e = e ||event;
				console.log(e);
				ul.className = "menu";
				
				ul.innerHTML = "<li>增加</li><li>修改</li><li>删除</li>";
				// 菜单出现在鼠标位置
				ul.style.left = e.clientX + "px";
				ul.style.top = e.clientY + "px";
				document.body.appendChild(ul);
				// 阻止默认事件
				if(e.preventDefault){
					e.preventDefault()  
				}else{
					window.event.returnValue = false;   
				}
				}
				document.onclick = function () {
				// 把ul删除
				document.body.removeChild(ul);
					}
		var li =Number( ul.querySelector("li"));
					li.onclick=function(){
						alert(fgf);
					}

				}
	
			
			//定时点击右键取消
			
			
		
		