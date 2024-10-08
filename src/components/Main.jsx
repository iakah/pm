import React from "react";
import Header from "./Header";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { roleMap } from "./Onboarding/helper";
import { Box } from "@mui/material";
import CashflowOwner from "./Cashflow/CashflowOwner";

import SelectMonthComponent from "./SelectMonthComponent";
import AddExpense from "./Cashflow/AddExpense";
import AddRevenue from "./Cashflow/AddRevenue";
import AddUtility from "./Cashflow/AddUtility";
import ViewLease from "./Leases/ViewLease";
import EditLease from "./Leases/EditLease";
import LeasePDF from "./Leases/LeasePDF";
import PropertyListings from "./Property/PropertyListings";

import Announcements from "./Announcement/Announcements";
import TenantDocuments from "./Documents/TenantDocuments/TenantDocuments";
import TenantProfile from "./Profile/TenantProfile/TenantProfile";
import TenantDashboard from "./TenantDashboard/TenantDashboard";
import TenantProfileEdit from "./Profile/TenantProfile/TenantProfileEdit";
import TenantLeases from "./Leases/TenantLeases/TenantLeases";

import OwnerDocuments from "./Documents/OwnerDocuments/OwnerDocuments";
import OwnerUploadDocuments from "./Documents/OwnerDocuments/OwnerUploadDocuments";
import OwnerLeases from "./Leases/OwnerLeases/OwnerLeases";
import OwnerProfile from "./Profile/OwnerProfile/OwnerProfile";
import OwnerRent from "./Rent/OwnerRent/OwnerRent";

import PMProfile from "./Profile/PMProfile/PMProfile";
import PMLeases from "./Leases/PMLeases/PMLeases";
import PMContracts from "./Contracts/PMContracts/PMContracts";
import ManagementContractDetails from "./Contracts/OwnerManagerContracts/ManagementContractDetails";
import PMDocuments from "./Documents/PMDocuments/PMDocuments";
import PMUploadDocuments from "./Documents/PMDocuments/PMUploadDocuments";
import OwnerRentDetail from "./Rent/OwnerRent/OwnerRentDetail";
import PMRent from "./Rent/PMRent/PMRent";
import PMRentDetail from "./Rent/PMRent/PMRentDetail";

import ViewTransactionOwner from "./Transactions/ViewTransactionOwner";
import PaymentsTenant from "./Payments/PaymentsTenant";
import TransactionHistory from "./Transactions/TransactionHistory";
import CardDetails from "./Payments/CardDetails";
import CashflowManager from "./Cashflow/CashflowManager";
import ManagerDashboardHappinessMatrix from "./ManagerDashboard/ManagerDashboardHappinessMatrix";
import Settings from "./Settings/SettingsOwner";

import PropertyInfo from "./Property/PropertyInfo";
import MaintenanceWidget from "./Dashboard-Components/Maintenance/MaintenanceWidget";

import Contacts from "./Contacts/Contacts";
import OwnerContacts from "./Contacts/OwnerContacts";
import PMContacts from "./Contacts/PMContacts";
import MaintenanceContacts from "./Contacts/MaintenanceContacts";
import ContactDetails from "./Contacts/ContactDetails";
import AddContacts from "./Contacts/AddContacts";
// import TenantContactDetails from "./Contacts/TenantContactDetails";
import TenantContactDetails from "./Contacts/ContactDetails/TenantContactDetails";
import ManagerContactDetails from "./Contacts/ContactDetails/ManagerContactDetails"; 
import MaintenanceContactDetails from "./Contacts/ContactDetails/MaintenanceContactDetails"; 
import OwnerContactDetails from "./Contacts/ContactDetails/OwnerContactDetails";

import PropertyList from "./Property/PropertyList";
import PMProperties from "./Property/PMProperties";
import POProperties from "./Property/POProperties";
import OwnerDashboard from "./OwnerDashboard";
import MaintenanceManager from "./Maintenance/MaintenanceManager";
import MaintenanceOwner from "./Maintenance/MaintenanceOwner";
import AddMaintenanceItem from "./Maintenance/AddMaintenanceItem";
import MaintenanceRequestDetail from "./Maintenance/MaintenanceRequestDetail";
import AddProperty from "./Property/AddProperty";
import EditProperty from "./Property/EditProperty";
import PropertyDetail from "./Property/PropertyDetail";
import SearchManager from "./Property/SearchManager";
import ManagerDetails from "./Property/ManagerDetails";
import TenantMaintenance from "./Maintenance/TenantMaintenance";
import AddTenantMaintenanceItem from "./Maintenance/AddTenantMaintenanceItem";
import MaintenanceRequestNavigator from "./Maintenance/MaintenanceRequestNavigator";
import TenantProperty from "./Property/TenantProperty";
import TenantMaintenanceItemDetail from "./Maintenance/TenantMaintenanceItemDetail";
import DocumentPDF from "./Documents/OwnerDocuments/DocumentPDF";

import EditProfileSettings from "./Settings/EditProfileSettings";
import ChangePasswordSettings from "./Settings/ChangePasswordSettings";
import AddCard from "./Settings/AddCard";
import AddPayment from "./Settings/AddPayment";
import CardDetailsSettings from "./Settings/CardDetailsSettings";
import SelectPayment from "./Settings/SelectPayment";
import PaymentConfirmation from "./Settings/PaymentConfirmation";
import { Footer } from "./Footer";
import ManagerDashboard from "./ManagerDashboard/ManagerDashboard";

import MaintenanceDashboard from "./MaintenanceDashboard/MaintenanceDashboard";

import SettingsACH1 from "./SettingsACH/SettingsACH1";
import SettingsACH2 from "./SettingsACH/SettingsACH2";
import SettingsACH3 from "./SettingsACH/SettingsACH3";
import SettingsACH4 from "./SettingsACH/SettingsACH4";
import SettingsACH5 from "./SettingsACH/SettingsACH5";
import POContracts from "./Contracts/POContracts/POContracts";
import NewOwnerInquiry from "./Contracts/OwnerManagerContracts/NewOwnerInquiry";
import QuoteAcceptForm from "./Maintenance/Manager/QuoteAcceptForm";
import QuoteRequestForm from "./Maintenance/Manager/QuoteRequestForm";
import RescheduleMaintenance from "./Maintenance/Manager/RescheduleMaintenance";
import PayMaintenanceForm from "./Maintenance/Manager/PayMaintenanceForm";

import Onboarding from "./Onboarding/Onboarding";
import NewUser from "./Onboarding/NewUser";
import Register from "./Onboarding/Register";
import ReturningUser from "./Onboarding/ReturningUser";
import UserLogin from "./Onboarding/UserLogin";
import OnboardingRouter from "./Onboarding/OnboardingRouter";
import ContactInfo from "./Onboarding/ContactInfo";

import SelectRole from "./Onboarding/SelectRole";

import BusinessQuoteForm from "./Maintenance/Business/BusinessQuoteForm";
import BusinessInvoiceForm from "./Maintenance/Business/BusinessInvoiceForm";

import Maintenance01 from "./Maintenance/Worker/MaintenanceWorker";
import MaintenanceRequestDetail01 from "./Maintenance/Worker/MaintenanceRequestDetail01";

import ProfileName from "./Onboarding/ProfileName";
import ProfileInfo from "./Onboarding/ProfileInfo";
import PersonalInfo from "./Onboarding/PersonalInfo";
import ProfilePayment from "./Onboarding/ProfilePayment";

import Forbidden from "./utils/Forbidden";
import AddRole from "./Onboarding/AddRole";

import Payments from "./Payments/Payments";
import PMQuotesRequested from "./Property/PMQuotesRequested";

import TenantApplication from "./Applications/TenantApplication";
import AddListing from "./Property/AddListing";
import RequestQuotes from "./Property/RequestQuotes";
import ViewDocument from "./Property/ViewDocument";

import PMNotifications from "./Notifications/PMNotifications";
import TenantApplicationNav from "./Applications/TenantApplicationNav";
import PONotifications from "./Notifications/PONotifications";
import PropertyContract from "./Notifications/PropertyContract";
import TenantLease from "./Applications/TenantLease";

function Main() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Box
        sx={{
          flex: "1", // Allow content to take remaining space
          overflow: "auto", // Enable scrolling when content overflows
        }}
      >
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/" element={<Onboarding />} />
            <Route path="newUser" element={<NewUser />} />
            <Route path="register" element={<Register />} />
            <Route path="returningUser" element={<ReturningUser />} />
            <Route path="userLogin" element={<UserLogin />} />
            <Route path="selectRole" element={<SelectRole />} />
            <Route path="profileName" element={<ProfileName />} />
            <Route path="profileInfo" element={<ProfileInfo />} />
            <Route path="personalInfo" element={<PersonalInfo />} />
            <Route path="profilePayment" element={<ProfilePayment />} />
            <Route path="onboardingRouter" element={<OnboardingRouter />} />
            <Route path="contactInfo" element={<ContactInfo />} />
            <Route path="forbidden" element={<Forbidden />} />
          </Route>

          {/* Private Routes */}
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="dashboard" element={<MaintenanceWidget />} />
            <Route path="cashflow" element={<CashflowOwner />} />
            <Route path="selectMonthComponent" element={<SelectMonthComponent />} />
            <Route path="addExpense" element={<AddExpense />} />
            <Route path="addRevenue" element={<AddRevenue />} />
            <Route path="addUtility" element={<AddUtility />} />
            <Route path="listings" element={<PropertyListings />} />
            <Route path="addListing" element={<AddListing />} />

            <Route path="viewLease" element={<ViewLease />} />
            <Route path="editLease" element={<EditLease />} />
            <Route path="leaseDocument" element={<LeasePDF />} />


            <Route path="PrivateprofileName" element={<ProfileName />} />
            <Route path="PrivateprofileInfo" element={<ProfileInfo />} />
            <Route path="PrivatepersonalInfo" element={<PersonalInfo />} />
            <Route path="PrivateprofilePayment" element={<ProfilePayment />} />
            <Route path="PrivateonboardingRouter" element={<OnboardingRouter />} />




            <Route path="announcements" element={<Announcements />} />
            <Route path="ownerProfile" element={<OwnerProfile />} />
            <Route path="ownerDocuments" element={<OwnerDocuments />} />
            <Route path="ownerDocumentsPDF" element={<DocumentPDF />} />
            <Route path="ownerUploadDocuments" element={<OwnerUploadDocuments />} />
            <Route path="ownerLeases" element={<OwnerLeases />} />
            <Route path="ownerRent" element={<OwnerRent />} />
            <Route path="ownerRentDetail" element={<OwnerRentDetail />} />

            <Route path="tenantDocuments" element={<TenantDocuments />} />
            <Route path="tenantLeases" element={<TenantLeases />} />
            <Route path="tenantProfile" element={<TenantProfile />} />
            <Route path="tenantProfileEdit" element={<TenantProfileEdit />} />
            <Route path="addRole" element={<AddRole />} />
            <Route path="tenantDashboard" element={<TenantDashboard />} />

            <Route path="pmProfile" element={<PMProfile />} />
            <Route path="pmLeases" element={<PMLeases />} />
            <Route path="pmContracts" element={<PMContracts />} />
            <Route path="managementContractDetails" element={<ManagementContractDetails />} />
            <Route path="pmDocuments" element={<PMDocuments />} />
            <Route path="pmUploadDocuments" element={<PMUploadDocuments />} />
            <Route path="pmRent" element={<PMRent />} />
            <Route path="pmRentDetail" element={<PMRentDetail />} />
            <Route path="addPaymentSettings" element={<AddPayment />} />
            <Route path="selectPayment" element={<SelectPayment />} />
            <Route path="PaymentConfirmation" element={<PaymentConfirmation />} />
            <Route path="transactionHistory" element={<TransactionHistory />} />
            <Route path="viewTransactionOwner" element={<ViewTransactionOwner />} />
            {/* <Route path="payments" element={<PaymentsTenant />} /> */}
            <Route path="payments" element={<Payments />} />
            <Route path="card" element={<CardDetails />} />
            <Route path="cashflowManager" element={<CashflowManager />} />
            <Route path="managerDashboardHappinessMatrix" element={<ManagerDashboardHappinessMatrix />} />
            <Route path="settingsOwner" element={<Settings />} />
            <Route path="settingsTenant" element={<Settings />} />
            <Route path="settingsManager" element={<Settings />} />
            <Route path="settingsPM_Employee" element={<Settings />} />
            <Route path="settingsMaintenance" element={<Settings />} />
            <Route path="settingsMaint_Employee" element={<Settings />} />
            <Route path="editProfileSettings" element={<EditProfileSettings />} />
            <Route path="changePasswordSettings" element={<ChangePasswordSettings />} />
            <Route path="addCardSettings" element={<AddCard />} />
            <Route path="cardDetailsSettings" element={<CardDetailsSettings />} />

            <Route path="propertyInfo" element={<PropertyInfo />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="ownerContacts" element={<OwnerContacts />} />
            <Route path="PMContacts" element={<PMContacts />} />
            <Route path="maintenanceContacts" element={<MaintenanceContacts />} />
            <Route path="contactDetails" element={<ContactDetails />} />
            <Route path="addContacts" element={<AddContacts />} />
            <Route path="tenantContactDetails" element={<TenantContactDetails />} />
            <Route path="managerContactDetails" element={<ManagerContactDetails />} />
            <Route path="maintenanceContactDetails" element={<MaintenanceContactDetails />} />
            <Route path="ownerContactDetails" element={<OwnerContactDetails />} />

            <Route path="managerMaintenance" element={<MaintenanceManager />} />
            <Route path="ownerMaintenance" element={<MaintenanceOwner />} />
            <Route path="ownerDashboard" element={<OwnerDashboard />} />

            <Route path="maintenanceDashboard" element={<MaintenanceDashboard />} />
            <Route path="addMaintenanceItem" element={<AddMaintenanceItem />} />
            <Route path="maintenance/detail" element={<MaintenanceRequestDetail />} />
            <Route path="maintenanceRequestNavigator" element={<MaintenanceRequestNavigator />} />
            <Route path="addProperty" element={<AddProperty />} />
            <Route path="editProperty" element={<EditProperty />} />
            <Route path="propertyDetail" element={<PropertyDetail />} />
            <Route path="searchManager" element={<SearchManager />} />
            <Route path="managerDetails" element={<ManagerDetails />} />
            <Route path="tenantMaintenance" element={<TenantMaintenance />} />
            <Route path="addTenantMaintenanceItem" element={<AddTenantMaintenanceItem />} />
            <Route path="myProperty" element={<TenantProperty />} />
            <Route path="properties" element={<PropertyList />} />
            <Route path="PMProperties" element={<PMProperties />} /> 
            <Route path="POProperties" element={<POProperties />} /> 
            <Route path="tenantMaintenanceItem" element={<TenantMaintenanceItemDetail />} />

            <Route path="settingsManagerACH1" element={<SettingsACH1 />} />
            <Route path="settingsManagerACH2" element={<SettingsACH2 />} />
            <Route path="settingsManagerACH3" element={<SettingsACH3 />} />
            <Route path="settingsManagerACH4" element={<SettingsACH4 />} />
            <Route path="settingsManagerACH5" element={<SettingsACH5 />} />

            <Route path="poContracts" element={<POContracts />} />
            <Route path="managerDashboard" element={<ManagerDashboard/>} />

            <Route path="quoteAccept" element={<QuoteAcceptForm />} />
            <Route path="quoteRequest" element={<QuoteRequestForm />} />
            <Route path="scheduleMaintenance" element={<RescheduleMaintenance />} />
            <Route path="rescheduleMaintenance" element={<RescheduleMaintenance />} />
            <Route path="payMaintenance" element={<PayMaintenanceForm />} />

            <Route path="businessDeclineQuoteForm" element={<BusinessQuoteForm acceptBool={false}/>} />
            <Route path="businessAcceptQuoteForm" element={<BusinessQuoteForm acceptBool={true}/>} />
            <Route path="businessInvoiceForm" element={<BusinessInvoiceForm/>} />
            <Route path="workerMaintenance" element={<Maintenance01 />} />
            <Route path="workerMaintenance/detail" element={<MaintenanceRequestDetail01 />} />

            <Route path="pmQuotesRequested" element={<PMQuotesRequested />} />
            <Route path="newOwnerInquiry" element={<NewOwnerInquiry />} />
            <Route path="requestQuotes" element={<RequestQuotes />} />
            <Route path="viewDocument" element={<ViewDocument />} />

            <Route path="tenantLease" element={<TenantLease />} />
            <Route path="tenantApplication" element={<TenantApplication />} />
            <Route path="tenantApplicationNav" element={<TenantApplicationNav />} />
            <Route path="pmNotifications" element={<PMNotifications />} />
            <Route path="poNotifications" element={<PONotifications />} />
            <Route path="propertyContract" element={<PropertyContract />} />
            
          </Route>
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}
export default Main;

const PrivateRoutes = () => {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? <Outlet /> : <Navigate to="/forbidden" />;
};

const PublicRoutes = () => {
  const { isLoggedIn, selectedRole } = useUser();
  return isLoggedIn ? <Navigate to={roleMap[selectedRole].dashboardUrl} /> : <Outlet />;
};
