import $ from 'jquery';
export default function(e){
    if(e.target.name === "check13"){
        $(".check13pair").attr("placeholder")? $(".check13pair").attr("placeholder",''):$(".check13pair").attr("placeholder",'REQUIRED');
        $(".check13pair").prop('disabled', !$(".check13pair").attr('disabled'));
    }
    if(e.target.name === "check65"){
        $(".check65pair").attr("placeholder")? $(".check65pair").attr("placeholder",''):$(".check65pair").attr("placeholder",'REQUIRED');
        $(".check65pair").prop('disabled', !$(".check65pair").attr('disabled'));
    }
    if(e.target.name === "check15"){
        $(".check15pair").attr("placeholder")? $(".check15pair").attr("placeholder",''):$(".check15pair").attr("placeholder",'REQUIRED');
        $(".check15pair").prop('disabled', !$(".check15pair").attr('disabled'));
    }
    if(e.target.name === "check17"){
        $(".check17pair").attr("placeholder")? $(".check17pair").attr("placeholder",''):$(".check17pair").attr("placeholder",'REQUIRED');
        $(".check17pair").prop('disabled', !$(".check17pair").attr('disabled'));
    }
    if(e.target.name === "check19"){
        $(".check19pair").attr("placeholder")? $(".check19pair").attr("placeholder",''):$(".check19pair").attr("placeholder",'REQUIRED');
        $(".check19pair").prop('disabled', !$(".check19pair").attr('disabled'));
    }
    if(e.target.name === "check21"){
        $(".check21pair").attr("placeholder")? $(".check21pair").attr("placeholder",''):$(".check21pair").attr("placeholder",'REQUIRED');
        $(".check21pair").prop('disabled', !$(".check21pair").attr('disabled'));
    }
    if(e.target.name === "check23"){
        $(".check23pair").attr("placeholder")? $(".check23pair").attr("placeholder",''):$(".check23pair").attr("placeholder",'REQUIRED');
        $(".check23pair").prop('disabled', !$(".check23pair").attr('disabled'));
    }
    if(e.target.name === "check25"){
        $(".check25pair").attr("placeholder")? $(".check25pair").attr("placeholder",''):$(".check25pair").attr("placeholder",'REQUIRED');
        $(".check25pair").prop('disabled', !$(".check25pair").attr('disabled'));
    }
    if(e.target.name === "check35"){
        $(".check35pair").attr("placeholder")? $(".check35pair").attr("placeholder",''):$(".check35pair").attr("placeholder",'REQUIRED');
        $(".check35pair").prop('disabled', !$(".check35pair").attr('disabled'));
    }
    if(e.target.name === "check565"){
        $(".check565pair").attr("placeholder")? $(".check565pair").attr("placeholder",''):$(".check565pair").attr("placeholder",'REQUIRED');
        $(".check565pair").prop('disabled', !$(".check565pair").attr('disabled'));
    }if(e.target.name === "check37"){
        $(".check37pair").attr("placeholder")? $(".check37pair").attr("placeholder",''):$(".check37pair").attr("placeholder",'REQUIRED');
        $(".check37pair").prop('disabled', !$(".check37pair").attr('disabled'));
    }
}