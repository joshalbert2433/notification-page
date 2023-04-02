import AvatarMark from "../assets/images/avatar-mark-webber.webp";
import AvatarAngela from "../assets/images/avatar-angela-gray.webp";
import AvatarJacob from "../assets/images/avatar-jacob-thompson.webp";
import AvatarRizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import AvatarKimberly from "../assets/images/avatar-kimberly-smith.webp";
import AvatarNathan from "../assets/images/avatar-nathan-peterson.webp";
import AvatarAnna from "../assets/images/avatar-anna-kim.webp";
import ImageChess from "../assets/images/image-chess.webp";

export let notificationData = [
	{
		name: "Mark Webber",
		message: "react to your recent post",
		messageActivity: {
			activityMessage: "My first tournament today!",
			isActive: true,
		},
		isNewNotification: true,
		imageURL: AvatarMark,
		timeLapse: "1m ago",
	},
	{
		name: "Angela Gray",
		message: "followed you",
		isNewNotification: true,
		imageURL: AvatarAngela,
		timeLapse: "5m ago",
	},
	{
		name: "Jacob Thompson",
		message: "has joined your group",
		messageActivity: {
			activityMessage: "Chess Club",
			isActive: true,
		},
		isNewNotification: true,
		imageURL: AvatarJacob,
		timeLapse: "1 day ago",
	},
	{
		name: "Rizky Hasanuddin",
		message: "sent you a private message",
		privateMessage:
			"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		isNewNotification: false,
		imageURL: AvatarRizky,
		timeLapse: "5 days ago",
	},
	{
		name: "Kimberly Smith",
		message: "commented on your picture",
		messagePicture: ImageChess,
		isNewNotification: false,
		imageURL: AvatarKimberly,
		timeLapse: "5 days ago",
	},

	{
		name: "Nathan Paterson",
		message: "reacted to your recent post",
		messageActivity: {
			activityMessage: "5 end-game strategies to increase your win rate",
			isActive: true,
		},
		isNewNotification: false,
		imageURL: AvatarNathan,
		timeLapse: "2 weeks ago",
	},
	{
		name: "Anna kim",
		message: "left the group",
		messageActivity: {
			activityMessage: "Chess Club",
			isActive: true,
		},
		isNewNotification: false,
		imageURL: AvatarAnna,
		timeLapse: "2 weeks ago",
	},
];
