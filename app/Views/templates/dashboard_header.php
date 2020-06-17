<?php
if(isset($_POST['create_pdf'])){
    if(isset($_POST['datepicker1'])) {
        $date1 = $_POST['datepicker1'];
        $date2 = $_POST['datepicker2'];
        $from = Carbon\Carbon::parse($date1);
        $to = Carbon\Carbon::parse($date2);
        ob_start();?>
        <p>&nbsp;</p>
    <p>&nbsp;</p>
    <table style="width: 713px;">
        <tbody>
        <tr>
            <td style="width: 285px;">Imie i nazwisko pracownika</td>
            <td style="width: 432px;">miejscowosc, data zlozenia podania</td>
        </tr>
        </tbody>
    </table>
    <p style="text-align: right;">&nbsp;</p>
    <p style="text-align: right;">&nbsp;</p>
    <p style="text-align: right;">nazwa i nip firmy</p>
    <p style="text-align: right;">&nbsp;</p>
    <p style="text-align: center;"><strong>WNIOSEK</strong></p>
    <p style="text-align: center;">Zwracam sie z prosba o udzielenie urlopu</p>
    <p style="text-align: center;">&nbsp;</p>
    <p style="text-align: center;">w okresie od <?php echo $date1?> do <?php echo $date2?>, tj <?php echo $to->diffInWeekDays($from) ?> dni roboczych.</p>
    <p style="text-align: center;">&nbsp;</p>
    <p style="text-align: center;">&nbsp;</p>
    <p style="text-align: center;">&nbsp;</p>
    <p style="text-align: center;">&nbsp;</p>
    <p style="text-align: right;">podpis pracownika</p>
    <p style="text-align: right;">&nbsp;</p>
    <p style="text-align: right;">&nbsp;</p>
    <p style="text-align: center;"><strong>WYRAZAM ZGODE / NIE WYRAZAM ZGODY* na udzielenie urlopu w w.w.terminie</strong></p>
    <p style="text-align: center;">&nbsp;</p>
    <p style="text-align: center;">&nbsp;</p>
    <p style="text-align: right;">&nbsp;</p>
    <p style="text-align: right;">&nbsp;</p>
    <p style="text-align: right;">podpis pracodawcy</p>


    <?php
           $body = ob_get_clean();
            $pdf = new TCPDF();
            $pdf->AddPage();
            $pdf->WriteHTML($body);
            $pdf->Output('wniosek.pdf','D');

    }
}
?>



<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>AdminLTE 2 | User Profile</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/bower_components/font-awesome/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/bower_components/Ionicons/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/bower_components/bootstrap-daterangepicker/daterangepicker.css">
    <!-- bootstrap datepicker -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">
    <!-- iCheck for checkboxes and radio inputs -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/plugins/iCheck/all.css">
    <!-- Bootstrap Color Picker -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/bower_components/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css">
    <!-- Bootstrap time Picker -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/plugins/timepicker/bootstrap-timepicker.min.css">
    <!-- Select2 -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/bower_components/select2/dist/css/select2.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/dist/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/dist/css/skins/_all-skins.min.css">
    <link rel="stylesheet" href="<?php echo base_url('/assets')?>/style.css"
    esheet" />



    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <![endif]-->

    <!-- Google Font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>

<body class="hold-transition skin-blue sidebar-mini">