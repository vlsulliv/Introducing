const initiateTeam = team => {

const initManager = mnanager => {
            `<div class="col-md-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx bxl"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">ManagerName</h6> <span>ID</span>
                        </div>
                    </div>
                    <div class="badge"> <span>OfficeNumber</span> </div>
                </div>
                <h3 class="heading">photo<br>Email</h3>
            </div>
        </div>`;
    }

const initIntern = intern => {
    `<div class="col-md-4">
            <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon"> <i class="bx"></i> </div>
                        <div class="ms-2 c-details">
                            <h6 class="mb-0">InternName</h6> <span>ID</span>
                        </div>
                    </div>
                    <div class="badge"> <span>School</span> </div>
                </div>
                <h3 class="heading">InternPhoto<br>email</h3>
            </div>
        </div>`;
    }

const initEngineer = engineer => {
        `<div class="col-md-4">
        <div class="card p-3 mb-2">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div class="icon"> <i class="bx"></i> </div>
                    <div class="ms-2 c-details">
                        <h6 class="mb-0">EngineerNAme</h6> <span>github</span>
                    </div>
                </div>
                <div class="badge"> <span>github</span> </div>
            </div>
            <h3 class="heading">Photo<br>email</h3>
        </div>
        </div>`;
}

module.exports = team => {
return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" rel="stylesheet"
        crossorigin="anonymous">
</head>

<body>
    <!-- jumbotron fluid -->
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Fluid jumbotron</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </div>
   


</body>

</html>`;
    }
}