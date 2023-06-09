import React, { useState } from "react";

import { notificationData } from "../data/notificationData";

function Home() {
	const [data, setData] = useState(notificationData);

	const MarkAllHandler = () => {
		const newData = data.map((data) => {
			if (data.isNewNotification) {
				return { ...data, isNewNotification: false };
			} else {
				return data;
			}
		});
		setData(newData);
	};

	return (
		<div className="px-6 max-w-4xl mx-auto bg-white rounded-lg mt-0 md:mt-12">
			<div className="flex justify-between items-center py-6">
				<h2 className="text-2xl font-bold">
					Notification{" "}
					<span className="px-3 ml-3 py-1 text-white text-lg bg-BlueCustom rounded-lg">
						{
							data?.filter(
								(data) => data.isNewNotification === true
							).length
						}
					</span>
				</h2>
				<div
					className="text-GrayishBlueDark hover:text-BlueCustom cursor-pointer"
					onClick={MarkAllHandler}
				>
					Mark all as read
				</div>
			</div>
			<div className="flex flex-col gap-3">
				{data.map((data, index) => {
					return (
						<div
							className={` p-4  flex gap-4 ${
								data.isNewNotification
									? "rounded-lg bg-LightGrayishBlueVery"
									: ""
							}`}
							key={index}
						>
							<figure className="h-10flex justify-center flex-none">
								<img
									src={data.imageURL}
									alt="Avatar Mark"
									className="w-12 h-12"
								/>
							</figure>
							<div className="grow">
								<p>
									<span className="font-bold hover:text-BlueCustom cursor-pointer">
										{data.name}
									</span>{" "}
									<span className="text-GrayishBlueDark text-[16px]">
										{data.message}{" "}
									</span>
									<span
										className={`font-bold ${
											data.messageActivity?.isActive &&
											" text-GrayishBlueDark hover:text-BlueCustom cursor-pointer"
										}`}
									>
										{data.messageActivity?.activityMessage}
									</span>
									{data.isNewNotification && (
										<span className="w-2 h-2 rounded-full bg-RedCustom inline-block ml-1 align-[2px]"></span>
									)}
								</p>
								<div className="text-GrayishBlue">
									{data.timeLapse}
								</div>
								{data.privateMessage && (
									<p className="p-4 border text-GrayishBlueDark mt-3 hover:bg-LightGrayishBlue1 rounded-lg cursor-pointer mr-2 ">
										{data.privateMessage}
									</p>
								)}
							</div>
							{data.messagePicture && (
								<figure className="w-[15%]">
									<img
										src={data.messagePicture}
										alt=""
										className="w-12 h-12 ml-auto mr-2 "
									/>
								</figure>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
