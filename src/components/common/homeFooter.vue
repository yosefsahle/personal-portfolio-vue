<template>
    <div class="mt-20 flex flex-col gap-5">
        <div class="z-2 w-full flex flex-col justify-between gap-3 items-center">
            <p class="text-[#0DB760] border  rounded-[50%_/_50%] w-22 font-bold center text-center">Contact</p>
            <p class="text-3xl font-bold">
                Let’s Discuss Your <span class="font-bold text-[#0DB760]">Project</span>
            </p>
            <p class="text-sm md:text-md md:w-2/5 text-center">Let’s make something new, different and more meaningful or make thing more visual or conceptual</p>
        </div>
        <div class="flex flex-col md:flex-row md:items-center">
            <div class="flex flex-col justify-around items-start md:w-1/3 gap-5 md:gap-10">
                <div class="flex flex-row items-center gap-3">
                    <div class="w-10 h-10 bg-[#0DB760] items-center flex justify-center rounded-md">
                        <i class="fa-solid fa-phone text-white"></i>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-sm text-gray-400">Call Me</p>
                        <p class="text-sm">+251 91 297 8713</p>
                    </div>
                </div>
                <div class="flex flex-row items-center gap-3">
                    <div class="w-10 h-10 bg-[#0DB760] items-center flex justify-center rounded-md">
                        <i class="fa-solid fa-envelope text-white"></i>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-sm text-gray-400">Email Me</p>
                        <p class="text-sm">yosefsahle48@gmail.com</p>
                    </div>
                </div>
                <div class="flex flex-row items-center gap-3">
                    <div class="w-10 h-10 bg-[#0DB760] items-center flex justify-center rounded-md">
                        <i class="fa-solid fa-location-dot text-white"></i>
                        
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-sm text-gray-400">Address</p>
                        <p class="text-sm">+251 91 297 8713</p>
                    </div>
                </div>
            </div>
            <div class="md:w-2/3 flex justify-center items-end">
                <form action="" class="w-full flex flex-col gap-5 mt-10 items-end">
                    <div class="flex flex-col md:flex-row gap-5 w-full">
                        <input type="text" placeholder="Your Name" class="text-xs w-full md:w-1/2 border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#0DB760]">
                        <input type="email" placeholder="Your Email" class="text-xs w-full md:w-1/2 border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#0DB760]">
                    </div>
                    <div class="flex flex-col md:flex-row gap-5 w-full">
                        <input type="text" placeholder="Phone Number" class="text-xs w-full md:w-1/2 border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#0DB760]">
                        <input type="email" placeholder="Budget" class="text-xs w-full md:w-1/2 border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#0DB760]">
                    </div>
                    <textarea placeholder="Message" class="text-xs w-full border border-gray-300 rounded-md px-3 py-3 h-25 resize-none focus:outline-none focus:ring-2 focus:ring-[#0DB760]"></textarea>
                    <button class="bg-[#0DB760] px-6 py-3 rounded-md text-white font-semibold text-xs md:text-md cursor-pointer w-full md:w-fit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</template>