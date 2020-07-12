<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
    <asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
        <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
        <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
        <meta name="WebPartPageExpansion" content="full" />
        <meta name="viewport" content="width=d4259c55488f4146a086-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Add your CSS styles to the following file -->
        <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
        <base href="#" />
        <meta name="viewport" content="width=d4259c55488f4146a086-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
        <!-- Add your JavaScript to the following file -->
        <script type="text/javascript" src="../Scripts/App.js"></script>
    </asp:Content>
    
 <%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
        Page Title
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

 <app-root></app-root>
 <!-- Add your JavaScript to the following file -->
 <script type="text/javascript" src="../Scripts/runtime.js"></script>
 <script type="text/javascript" src="../Scripts/polyfills.chunk.js"></script>
 <script type="text/javascript" src="../Scripts/styles.chunk.js"></script>
 <script type="text/javascript" src="../Scripts/vendor.chunk.js"></script>
 <script type="text/javascript" src="../Scripts/main.chunk.js"></script>


</asp:Content>
