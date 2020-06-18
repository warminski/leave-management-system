<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="<?php /*/*echo base_url('/scripts')*/?>/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="<?php /*/*echo base_url('/scripts')*/?>/bootstrap.min.js"></script>-->
<?php
$dblink = mysqli_connect('localhost','root','','leave_system');
$all = "SELECT user.id,name,startDate,endDate,customClass FROM leaves,user WHERE user.id = leaves.user_id";
$result = mysqli_query($dblink,$all);
$dbdata = array();
$names = "SELECT name FROM user,leaves WHERE user.id = leaves.user_id";
$result2 = mysqli_query($dblink,$names);
$dbdatanames = array();
while ( $row = $result->fetch_assoc())  {
    $dbdata[]=$row;
}
while ( $row = $result2->fetch_assoc()) {

    $dbdatanames[] = $row['name'];

}

$asdasd = array_values($dbdatanames);
?>
<link rel="stylesheet" href="<?php echo base_url('/assets')?>/rescalendar.css">
<style>

    body{
        text-align: center;
    }

    h1{
        text-align: left;
        margin: 30px 0 100px 30px;
    }

    h4{
        margin: 60px 0 10px 60px;
    }

    .wrapper{
        width: 100%;
        text-align: center;
    }

    .greenClass{
        background: green;
    }

    .blueClass{
        background: blue;
    }
    .dataCell{
        border: 1px solid black;
    }
    td, th{
        border: 1px solid black;
        padding: 3px;
    }

</style>
<div class="wrapper">

    <header class="main-header">
        <!-- Logo -->
        <a href="/dashboard" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>A</b>LT</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Admin</b>LTE</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="/logout" class="btn btn-default btn-flat">Sign out</a>
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>


        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="<?php echo base_url('/assets')?>/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p><?= $user['name'] ?></p>
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>

            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                    </a>
                </li>
        </section>
        <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->

        <!-- Main content -->
        <section class="content">

            <div class="row">
                <div class="col-md-3">

                    <!-- Profile Image -->
                    <div class="box box-primary">
                        <div class="box-body box-profile">
                            <img class="profile-user-img img-responsive img-circle" src="<?php echo base_url('/assets')?>/dist/img/user2-160x160.jpg" alt="User profile picture">

                            <h3 class="profile-username text-center"><?= $user['name'] ?></h3>

                        </div>
                        <!-- /.box-body -->
                    </div>

                </div>
                <!-- /.col -->
                <div class="col-md-9">
                    <div class="nav-tabs-custom">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#activity" data-toggle="tab">Employee List </a></li>
                            <li><a href="#timeline" data-toggle="tab">Calendar</a></li>
                            <li><a href="#settings" data-toggle="tab">Add new leave</a></li>
                        </ul>
                        <div class="tab-content">
                            <div class="active tab-pane" id="activity">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Leave days</th>
                                        </tr>
                                        <?php foreach($rows as $asd): ?>
                                            <tr id="<?php echo $asd->id; ?>">
                                                <td data-target="name"><?php echo $asd->name; ?></td>
                                                <td data-target="email"><?php echo $asd->email; ?></td>
                                                <td data-target="leave_days"><?php echo $asd->leave_days; ?></td>
                                                <td class="edit"><a href="#" data-role="update" data-id="<?php echo $asd->id;?>">
                                                        Edit
                                                    </a></td>
                                            </tr>


                                        <?php endforeach; ?>
                                    </table>
                                </div>

                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Edit user data</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label>Name</label>
                                                    <input type="text" id="name" class="form-control">
                                                </div>
                                                <div class="form-group">
                                                    <label>Email</label>
                                                    <input type="text" id="email" class="form-control">
                                                </div>
                                                <div class="form-group">
                                                    <label>Leave days</label>
                                                    <input type="number" id="leave_days" class="form-control">
                                                </div>
                                                <input type="hidden" id="userId" class="form-control">




                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button id="save" type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- /.post -->

                            <!-- /.tab-pane -->
                            <div class="tab-pane" id="timeline">
                                <div class="rescalendar" id="my_calendar_en"></div>

                            </div>







                            <div class="tab-pane" id="settings">
                                <div class="row">
                                    <div class="col-md-4">
                                        Select user
                                        <form method="post">
                                            <select id="user_id" name="user_id" class="form-control">
                                                <?php

                                                foreach($leaves as $row)
                                                {
                                                    echo '<option value="'.$row->id.'">'.$row->id.'.'.$row->name.'</option>';
                                                }
                                                ?>
                                            </select>

                                    </div>
                                    <div class="col-md-4">
                                        Select start date
                                        <div class='input-group date' id='datepicker1'>

                                            <input type='text' id="startDate" name="startDate" class="form-control" />

                                            <span class="input-group-addon" style="visibility: hidden">
                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                    </span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        Select end date
                                        <div class='input-group date' id='datepicker2'>

                                            <input type='text' id="endDate" name="endDate" class="form-control" />

                                            <span class="input-group-addon" style="visibility: hidden">
                                                        <span class="glyphicon glyphicon-calendar"></span>
                                                    </span>
                                        </div>
                                    </div>
                                    <input id="zapisz" type="submit" name="create_leave" class="btn btn-danger" value="Create leave"/>
                                    </form>
                                </div>



                            </div>


            <!-- /.col -->
    </div>
    <!-- /.row -->

    </section>
    <!-- /.content -->
</div>

<!-- /.content-wrapper -->
<footer class="main-footer">
    <div class="pull-right hidden-xs">
        <b>Version</b> 2.4.0
    </div>
    <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
    reserved.
</footer>

<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
    <!-- Create the tabs -->
    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
    </ul>
    <!-- Tab panes -->

    <!-- /.tab-pane -->
    </div>
</aside>
<!-- /.control-sidebar -->
<!-- Add the sidebar's background. This div must be placed
     immediately after the control sidebar -->
<div class="control-sidebar-bg"></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="<?php echo base_url('/scripts')?>/moment.js"></script>
<script src="<?php echo base_url('/scripts')?>/rescalendar.js"></script>
<script src="<?php echo base_url('/scripts')?>/calendar.js"></script>
<script>
    $(document).ready(function(){
        $(document).on('click','a[data-role=update]',function(){
            var id = $(this).data('id');
            var name = $('#'+id).children('td[data-target=name]').text();
            var email = $('#'+id).children('td[data-target=email]').text();
            var leave_days = $('#'+id).children('td[data-target=leave_days]').text();
            $('#name').val(name);
            $('#email').val(email);
            $('#leave_days').val(leave_days);
            $('#userId').val(id);
            $('#myModal').modal('toggle');
        })
        $('#save').click(function(){
            var id = $('#userId').val();
            var name = $('#name').val();
            var email = $('#email').val();
            var leave_days = $('#leave_days').val();
            $.ajax({
                url : '<?php echo base_url();?>/connection.php',
                method : 'post',
                data : {name : name, email : email, id : id, leave_days : leave_days},
                success : function(response){
                    console.log(response);
                }

            })
            $('#myModal').modal('toggle');
            location.reload();
        })
        $('form').submit(function(){
            var user_id = parseInt(document.getElementById("user_id").value);
            var startDate = $('#startDate').val();
            var endDate = $('#endDate').val();
            $.ajax({
                url : '<?php echo base_url();?>/connection2.php',
                method : 'post',
                data : {user_id : user_id, startDate : startDate, endDate : endDate},
                success : function(response){
                    console.log(response);
                }

            })
        })
    });
</script>
<script>
    $(function(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy+ '-' + mm + '-' + dd;
        $('#my_calendar_en').rescalendar({
            id: 'my_calendar_en',
            format: 'YYYY-MM-DD',
            refDate: today,
            jumpSize: 10,
            disabledDays: ['2020-01-01','2020-01-06','2020-04-12','2020-04-13','2020-05-01','2020-05-03','2020-05-31','2020-06-11','2020-08-15','2020-11-11','2020-12-25','2020-12-26','2021-01-01','2021-01-06','2021-04-04','2021-04-05','2021-05-01','2021-05-03','2021-05-23','2021-06-03','2021-08-15','2021-11-01','2021-11-11','2021-12-25','2021-12-26'],
            disabledWeekDays: [0,6],
            data: <?php echo json_encode($dbdata) ?>,

            /*dataKeyField: 'id',
            dataKeyValues: ['item1', 'item2', 'item3','item4','item5']*/
            dataKeyField: 'id',
            dataKeyValues: <?php echo json_encode($asdasd) ?>

        });
    });
    $(function(){
        $('#datepicker1').datepicker({
            format: "yyyy-mm-dd",
        });

        $('#datepicker2').datepicker({
            format: "yyyy-mm-dd",
        });
    });
</script>
