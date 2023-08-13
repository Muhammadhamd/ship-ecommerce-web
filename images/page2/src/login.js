document.getElementById("loginbtn").addEventListener("click",(e)=>{
    let logoDiv = `   <div id="login" class="fixed w-full h-[100vh] bg-[#00000094] flex justify-center items-center">
    <div class="max-w-[800px] w-full rounded shadow flex bg-white" >
        <div class="w-[400px]">
            <img class="w-full" src="./images/page2/sec-3.jpeg" alt="">
        </div>
        <div class="w-[400px] p-2">
            <div class="flex justify-end">
                <button id="closebtn"><i class="fa fa-close"></i></button>
            </div>
            <div class="flex flex-col justify-center items-center">
                <form class="w-[300px] gap-[20px] flex flex-col">
                    <h1 class="text-2xl tracking-tight font-bold">Login</h1>
                    <input type="email" class="px-3 py-2 border rounded w-full outline-none" placeholder="Enter email" name="" id="">
                    <input type="password" class="px-3 py-2 border rounded w-full outline-none" placeholder="Enter password" name="" id="">
                    <input type="submit" value="Login" class="px-3 py-2 border rounded w-full bg-[#40787C] text-white">
                </form>
            </div>
        </div>
    </div>
</div>`
document.querySelector('body').innerHTML = logoDiv
document.getElementById("reg-form").style.display += "flex"
})

document.getElementById("closebtn").addEventListener("click",(e)=>{
console.log("faf")
    document.getElementById("reg-form").style.display = "none"
})
