let packageType = "Express";
switch (packageType) {
    case "Standard":
        console.log("Estimated delivery time:3-5 days");
        break;
    case "Express":
        console.log("Estimated delivery time: 1-3 days");
        break;
    case "Overnight":
        console.log("Estimated delivery time: next day");
     break;

    default:
        console.log("Invalid Package Type...");
}
