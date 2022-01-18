console.log("Hello, world!!");

const targetSearch = $("#exTargetBtn");

const handleExTarget = async (event) => {
  event.preventDefault();
  const target = $("#exTarget").val();
  //   console.log(target);
  const response = await fetch(`/exercises/${target}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(`/exercises/${target}`);
  } else {
    alert("Failed to find exercises");
  }
};

targetSearch.on("click", handleExTarget);
