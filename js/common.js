document.addEventListener('DataPageReady', function (event) {
  
  // click li in navbar
  $('#menu-content').find('li').on('click', function(e) {

    if($(this).find('a').length) {
      window.location.href = $(this).find('a').attr('href');
    } 

  });

  // --------- login ---------

  if (event.detail.appKey == 'cb4fb000acd2deefb5c3488f96e6') {
    appendResetPasswordAdmin();
  } else if (event.detail.appKey == 'cb4fb00019570b75205040889dae') {
    appendBackToLogin();
  } else if (event.detail.appKey == 'cb4fb000ac657975f9ac4b15bcf0') {
    appendResetPassword();
  }

  // --------- login --------- 

});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

function appendResetPasswordAdmin () {
  var back = document.createElement("a")
  back.innerHTML = "Forgot your password?"
  back.classList.add("mt-2")
  back.classList.add("float-left")
  back.setAttribute("href", "reset-password.html?r=a");
        $(".cbLoginButtonContainer").append(back)
}

function appendResetPassword () {
  var back = document.createElement("a")
  back.innerHTML = "Forgot your password?"
  back.classList.add("mt-2")
  back.classList.add("float-left")
  back.setAttribute("href", "reset-password.html");
        $(".cbLoginButtonContainer").append(back)
}

function appendBackToLogin() {
  $("#link-anchor").remove()
  var back = document.createElement("a")
  back.innerHTML = "Back to Login"
  back.classList.add("mt-2")
  back.classList.add("float-left")
  back.setAttribute("id", "link-anchor");
  let r = getUrlParameter("r");
  if (r == "a") back.setAttribute("href", "admin-login.html");
  else back.setAttribute("href", "user-login.html");
  $(".cbPasswordRecoveryButtonContainer").append(back);
  
}

function load_admin_sidenavbar(active_nav) {
  $('.nav-side-menu').html(' \
    <div class="brand py-3">\
      <h5 class="mb-0">UNIFIED PAYGATE SERVICES</h5>\
	  <a href="https://c2dcy386.caspio.com/folderlogout" referrerpolicy="no-referrer-when-downgrade">\
	  <i class="fa fa-power-off fa-lg"></i>\
	  </a>\
    </div>\
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>\
    <div class="menu-list">\
      <ul id="menu-content" class="menu-content collapse out">\
        <li class="py-2 mt-3 title">\
          <span>\
            <h5 class="pl-1 mb-0">Partner Transactions</h5>\
          </span>\
        </li>\
        <li id="nav-dashboard">\
          <a href="./dashboard.html">\
            <i class="fa fa-tachometer-alt fa-lg"></i> Dashboard\
          </a>\
        </li>\
        <li id="nav-daily-transactions">\
          <a href="./daily-transactions.html">\
            <i class="fa fa-search fa-lg"></i> Daily\
          </a>\
        </li>\
		<li id="nav-last3months-transactions">\
          <a href="./last-3-months-transactions.html">\
            <i class="fa fa-exclamation-triangle fa-lg"></i> Compare\
          </a>\
        </li>\
		<li id="nav-add-machine-entry">\
          <a href="./add-machine-entry.html">\
            <i class="fa fa-plus fa-lg"></i> Machine Transactions\
          </a>\
        </li>\
		<li id="nav-update-sales">\
          <a href="./update-sales.html">\
            <i class="fa fa-gavel fa-lg"></i> Update Selling Percent\
          </a>\
        </li>\
        <li id="nav-my-expense" class="py-2 mt-3 title">\
          <span>\
            <h5 class="pl-1 mb-0">Expenses & Requests</h5>\
          </span>\
        </li>\
        <li id="nav-manage-expense">\
          <a href="./manage-expense.html">\
            <i class="fa fa-gavel fa-lg"></i> Expenses\
          </a>\
        </li>\
		<li id="nav-requests">\
          <a href="./request.html">\
            <i class="fa fa-plus fa-lg"></i> Requests\
          </a>\
        </li>\
		<li id="nav-verification" class="py-2 mt-3 title">\
          <span>\
            <h5 class="pl-1 mb-0">Verification</h5>\
          </span>\
        </li>\
		<li id="nav-pending-sales-report">\
          <a href="./pending-sales-report.html">\
            <i class="fa fa-plus fa-lg"></i> Report\
          </a>\
        <li id="nav-verify-selling-percent">\
          <a href="./verify-selling-percent.html">\
            <i class="fa fa-gavel fa-lg"></i> Selling Rate\
          </a>\
        </li>\
		<li class="py-2 mt-3 title">\
          <span>\
            <h5 class="pl-1 mb-0">Business Report</h5>\
          </span>\
        </li>\
        <li id="nav-accupay-charges">\
          <a href="./accupay-charges.html">\
            <i class="fa fa-search fa-lg"></i> Payout Charges\
          </a>\
        </li>\
		<li id="nav-epay-cashback">\
          <a href="./epay-cashback.html">\
            <i class="fa fa-search fa-lg"></i> Payout Cashback & Charges\
          </a>\
        </li>\
		<li id="nav-epay-link-cashback">\
          <a href="./epay-link-cashback.html">\
            <i class="fa fa-search fa-lg"></i> Payin Cashback\
          </a>\
        </li>\
		<li id="nav-wallet-balance">\
          <a href="./wallet-balance.html">\
            <i class="fa fa-tachometer-alt fa-lg"></i> Wallet Balance\
          </a>\
        </li>\
		<li id="nav-business-summary">\
          <a href="./business-summary.html">\
            <i class="fa fa-tachometer-alt fa-lg"></i> Profit Share\
          </a>\
        </li>\
		<li class="py-2 mt-3 title">\
          <span>\
            <h5 class="pl-1 mb-0">Setup</h5>\
          </span>\
        </li>\
        <li id="nav-meta-data">\
          <a href="./meta-data.html">\
            <i class="fa fa-search fa-lg"></i> Meta Data\
          </a>\
        </li>\
        <li id="nav-merchant-details">\
          <a href="./merchant-details.html">\
            <i class="fa fa-search fa-lg"></i> Merchant Details\
          </a>\
        </li>\
		 <li id="nav-employee-details">\
          <a href="./employee-details.html">\
            <i class="fa fa-search fa-lg"></i> Employee Details\
          </a>\
        </li>\
      </ul>\
    </div>\
  ');

  $('#nav-' + active_nav).addClass('active');
}

function load_user_sidenavbar(active_nav) {
  $('.nav-side-menu').html(' \
    <div class="brand py-3">\
      <h5 class="mb-0">UNIFIED PAYGATE SERVICES</h5>\
    </div>\
    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>\
    <div class="menu-list">\
      <ul id="menu-content" class="menu-content collapse out">\
        <li class="py-2 mt-3 title">\
          <span>\
            <h5 class="pl-1 mb-0">My Transactions</h5>\
          </span>\
        </li>\
        <li id="nav-dashboard">\
          <a href="./dashboard.html">\
            <i class="fa fa-tachometer-alt fa-lg"></i> Dashboard\
          </a>\
        </li>\
        <li id="nav-daily-transactions">\
          <a href="./daily-transactions.html">\
            <i class="fa fa-search fa-lg"></i> Daily\
          </a>\
        </li>\
		<li id="nav-last3months-transactions">\
          <a href="./last-3-months-transactions.html">\
            <i class="fa fa-exclamation-triangle fa-lg"></i> Compare\
          </a>\
        </li>\
		<li id="nav-add-machine-entry">\
          <a href="./add-machine-entry.html">\
            <i class="fa fa-plus fa-lg"></i> Machine Transactions\
          </a>\
        </li>\
		<li id="nav-update-sales">\
          <a href="./update-sales.html">\
            <i class="fa fa-gavel fa-lg"></i> Update Sales Report\
          </a>\
        </li>\
		<li id="nav-business-report">\
          <a href="./business-report.html">\
            <i class="fa fa-search fa-lg"></i> Business Report\
          </a>\
        </li>\
        <li id="nav-my-expense" class="py-2 mt-3 title">\
          <span>\
            <h5 class="pl-1 mb-0">My Expenses</h5>\
          </span>\
        </li>\
        <li id="nav-add-new">\
          <a href="./add-new.html">\
            <i class="fa fa-plus fa-lg"></i> Add & Manage Expense\
          </a>\
        </li>\
        <li id="nav-manage-expense">\
          <a href="./manage-expense.html">\
            <i class="fa fa-gavel fa-lg"></i> View Expense\
          </a>\
        </li>\
		<li class="py-2 mt-3 title">\
          <span>\
            <h5 class="pl-1 mb-0">My Business Report</h5>\
          </span>\
        </li>\
		<li id="nav-gross-profit">\
          <a href="./gross-profit.html">\
            <i class="fa fa-search fa-lg"></i> Gross Profit\
          </a>\
        </li>\
        <li id="nav-accupay-charges">\
          <a href="./accupay-charges.html">\
            <i class="fa fa-search fa-lg"></i> Payout Charges\
          </a>\
        </li>\
		<li id="nav-epay-cashback">\
          <a href="./epay-cashback.html">\
            <i class="fa fa-search fa-lg"></i> Payout Cashback & Charges\
          </a>\
        </li>\
		<li id="nav-epay-link-cashback">\
          <a href="./epay-link-cashback.html">\
            <i class="fa fa-search fa-lg"></i> Payin Cashback\
          </a>\
        </li>\
		<li id="nav-business-summary">\
          <a href="./business-summary.html">\
            <i class="fa fa-tachometer-alt fa-lg"></i> Profit Share\
          </a>\
        </li>\
        <li id="nav-settings" class="py-2 mt-3 title">\
          <span>\
            <h5 class="pl-1 mb-0">Settings</h5>\
          </span>\
        </li>\
        <li id="nav-profile">\
          <a href="./profile.html">\
            <i class="fa fa-user fa-lg"></i> Profile\
          </a>\
        </li>\
        <li id="nav-change-password">\
          <a href="./change-password.html">\
            <i class="fa fa-lock fa-lg"></i> Change Password\
          </a>\
        </li>\
        <li id="nav-logout">\
          <a href="https://c2dcy386.caspio.com/folderlogout" referrerpolicy="no-referrer-when-downgrade">\
            <i class="fa fa-power-off fa-lg"></i> Logout\
          </a>\
        </li>\
      </ul>\
    </div>\
  ');

  $('#nav-' + active_nav).addClass('active');
}



jQuery(function ($) {

  $(".sidebar-dropdown > a").click(function () {
    $(".sidebar-submenu").slideUp(200);
    if (
      $(this)
      .parent()
      .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });

  $("#close-sidebar").click(function () {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".page-wrapper").addClass("toggled");
  });

  $('')

});
