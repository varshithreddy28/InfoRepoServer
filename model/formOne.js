const mongoose = require("mongoose");

const form46Schema = new mongoose.Schema({
  headerContent: {
    date: { type: String, required: true },
    time: { type: String, required: true },
    names: [{ type: String, required: true }],
  },
  genContent: {
    name_of_the_Department: { type: String, required: true },
    organizationName: { type: String, required: true },
    organizationAddress: { type: String, required: true },
    registrationNo: { type: String, required: true },
    completeAddressCCI: { type: String, required: true },
    personIncharge: { type: String, required: true },
    contactNo: { type: Number, required: true },
    emailId: { type: String, required: true },
    type_home: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
  },
  staffContent: [
    {
      name: { type: String, required: true },
      designation: { type: String, required: true },
      joiningDate: { type: String, required: true },
      attendance: { type: String, required: true },
      remarks: { type: String, required: true },
    },
  ],
  infraContent: {
    other_artcl: { type: String, required: true }, //
    spaceAvailable: { type: String, required: true }, //
    noofRoomsDom: { type: String, required: true }, //
    provSickMedical: { type: String, required: true }, //
    counselingRoom: { type: String, required: true }, //
    building: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    cctv_entrance: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    security_level: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    accomidation_space: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    tvSet_cable: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    child_allowed: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    games_indoors: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    games_aval: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    games_outdoors: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    equipment_avail: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    picnics: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    interactions_eminent: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    reaction_room: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    cooking_area: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    child_individual_mugs: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    cooking_clean: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    fridge_avl: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    oven_available: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    gas_available: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    chimney_available: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    gas_arrangement: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    water_cooking_clean: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    water_drinking: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    cooking_done_by: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    flush_working: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    taps_functioning: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    floor_slippery: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    drains_clean: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    drains_clogged: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    fittings_in_place: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    cobwebs_removed: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    door_has_latch: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    door_has_peepholes: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    bath_frequency_allowed: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    adequate_water_available: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    adequate_buckets_mugs: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    personal_toiletries_provided: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    washing_powder_soap_given: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_wash_own_clothes: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    washer_man_available: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    washing_machine_functional: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    child_friendly_indoors: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    sweeping_frequency: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    child_involvement_cleaning: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    coolers_heaters_available: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    doors_windows_maintenance: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    well_ventilated_rooms: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    alternate_lights_fans: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    clean_child_friendly_outdoors: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    clothes_size_season: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    undergarments_change_frequency: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    new_clothes_stitched_or_bought: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    individual_mattresses: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    individual_pillows: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    clean_mattress_pillows: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    separate_cupboards_children: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    bed_sheets_khes_available: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    blankets_available_winters: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    sets_provided_on_arrival: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    new_clothes_frequency: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    sets_color: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    individual_lockers_children: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
  },
  servicesContent: {
    other_programs_and_activities: { type: String, required: true },
    medicalFacilitiesHealth: { type: String, required: true },
    nutritionSplDiet: { type: String, required: true },
    provOfDrinkingWater: { type: String, required: true },
    morningActivities: { type: String, required: true },
    dayTimeActivities: { type: String, required: true },
    afternoonActivities: { type: String, required: true },
    eveningActivities: { type: String, required: true },
    computer_with_internet: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    facility_functional: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_use_facility: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    official_purpose_telephone: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_use_telephone: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    childline_displayed_near_phone: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    counseling_services: { type: String, required: true },
    vocational_training: { type: String, required: true },
    recreational_facilities: { type: String, required: true },
    linkages_with_agencies: { type: String, required: true },
    missing_child_programme_entries: { type: String, required: true },
    missing_child_programme_user: { type: String, required: true },
  },
  committeContent: {
    constitution_of_management_committee: { type: String, required: true },
    formation_child_committe: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    formation_management_committe: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    ageFormation: { type: String, required: true },
    committeeMeetingFrequency: { type: String, required: true },
    frequency_meetings: { type: String, required: true },
  },
  statusContent: {
    children_Interventions: { type: String, required: true }, //
    Sanction_capacity_Home: { type: String, required: true }, //
    seven_to_eleven_yrs: { type: String, required: true }, //
    twelve_to_eighteen: { type: String, required: true }, //
    newAdmissions_cur_month: { type: String, required: true }, //
    number_of_children: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    bathing_sleeping: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_0_5: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_18_abv: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    care_plans: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    childre_special_needs: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_released: { type: String, required: true }, //
    "children_referred_CWC/JJB": { type: String, required: true }, //
    "children_produced_CWC/JJB": { type: String, required: true }, //
    children_prev_mnth: { type: String, required: true }, //
    children_spl_needs: { type: String, required: true }, //
  },
  recordMaintenanceContent: {
    otherRecordMaintained: { type: String, required: true }, //
    staff_attendance: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_attendance: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    central_admission: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    individual_case_file: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    communication_cwc_jjb: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_suggestion_book: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_suggestion_box: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    medical_file: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    personal_belongings_register: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    management_committee_minutes: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    children_committee_minutes: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
    nutrition_diet_file: {
      note: {
        type: String,
      },
      remark: {
        type: String,
      },
      value: {
        type: String,
        required: true,
      },
    },
  },
  remarksContent: [
    {
      committeeMemberName: { type: String, required: true },
      placeVisit: { type: String, required: true },
      inspectionDate: { type: String, required: true },
      employeeId: { type: String, required: true },
      remarks: { type: String, required: true },
    },
  ],
});

const Form46Model = mongoose.model("Form46", form46Schema);

module.exports = Form46Model;
