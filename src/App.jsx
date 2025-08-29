import { Routes, Route, Navigate } from 'react-router-dom'
path = "/user/reports"
element = {
< PrivateRoute allow = { ["user"]} >
    <UserReports />
</PrivateRoute >
}
/>
    < Route
path = "/user/new"
element = {
< PrivateRoute allow = { ["user"]} >
    <NewReport />
</PrivateRoute >
}
/>
    < Route
path = "/user/profile"
element = {
< PrivateRoute allow = { ["user"]} >
    <Profile />
</PrivateRoute >
}
/>


    < Route
path = "/gov"
element = {
< PrivateRoute allow = { ["gov"]} >
    <GovDashboard />
</PrivateRoute >
}
/>


    < Route path = "*" element = {< Navigate to = "/login" replace />} />
</Routes >
</main >
    <Footer />
</div >
</AuthProvider >
)
}