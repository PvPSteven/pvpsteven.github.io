(function() {

  var util = YAHOO.util,
      Cookie = util.Cookie,
      Dom = util.Dom,
      FlowDialog = YAHOO.widget.FlowDialog,
      Event = util.Event;

  // Helper function to grab the edition from an element
  var getEdition = function(el) {
    return Dom.getAttribute(el, "data-edition");
  };

  // Helper function to fetch the elements we care about
  var getEls = function() {
    return Dom.getElementsByClassName('switchLk', 'a');
  };

  // When the user is a parent (userType 11), we want a dialog for switching the product edition.
  var setupDialog = function() {
    var accountDialog = new FlowDialog("editEdition", {
      response_type: "json",
      links: getEls()
    });

    // Remember which edition they want.
    var redirectHref;

    // Save the redirect href, and use the edition on the link for the dialog.
    accountDialog.beforeOpenDialogFromLink = function(href, ev) {
      redirectHref = href;
      return "/account/editedition?newIxlProductEdition=" + getEdition(Event.getTarget(ev));
    };

    // When the dialog was a success, redirect to the edition the chose.
    accountDialog.completeEvent.subscribe(function() {
      window.location = redirectHref;
    });
  };

  // When the user is not signed in (userType null), we want to override the preferred product
  // edition. We do this by setting a cookie before the link is clicked.
  var setupAddCookie = function() {
    Event.addListener(getEls(), 'click', function(e) {
      Cookie.set("PPEO", getEdition(Event.getTarget(e)), {
        path: "/"
      });
    });
  };

  // Do the setup when the page is ready.
  Event.onDOMReady(function() {
    var userType = Dom.get("userType");
    if (userType === null) {
      setupAddCookie();
    }
    else if (userType.value === "11") {
      setupDialog();
    }
  });

}());

