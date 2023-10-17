const mongoose = require("mongoose");

const form46ASchema = new mongoose.Schema({
  headerContent: {
    address_of_institution: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    name_of_institution: { type: String, required: true },
    education_facility: { type: String, required: true },
    type_facility: { type: String, required: true },
  },
  statusContent: {
    children_Interventions: { type: String, required: true },
    Sanction_capacity_Home: { type: String, required: true },
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
    seven_to_eleven_yrs: { type: String, required: true },
    twelve_to_eighteen: { type: String, required: true },
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
    newAdmissions_cur_month: { type: String, required: true },
    children_released: { type: String, required: true },
    "children_referred_CWC/JJB": { type: String, required: true },
    "children_produced_CWC/JJB": { type: String, required: true },
    children_prev_mnth: { type: String, required: true },
    children_spl_needs: { type: String, required: true },
  },

  legalContent: {
    foreign_contribution_registration: {
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
      fileUrl: {
        type: String,
      },
    },
    parent_organization_registration: {
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
      fileUrl: {
        type: String,
      },
    },
    parent_organization_registration_no: {
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
      fileUrl: {
        type: String,
      },
    },
  },

  physicalInfraContent: {
    access_guidelines: {
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
    sign_board_displayed: {
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
    boundary_wall_fencing: {
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
    classroom: {
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
    dormitories: {
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
    kitchen: {
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
    counseling: {
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
    recreation: {
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
    sick_room: {
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
    library: {
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
    visitors_room: {
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
    vocational_training: {
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
    store: {
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
    office_room: {
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
    toilets: {
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
    good_condition: {
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
    child_friendly_bathrooms: {
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
    child_friendly_toilets: {
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
    drinking_water_storage: {
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
    drinking_water_provided: {
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
    garbage_disposal_facilities: {
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
    dining_hall: {
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
    bathrooms: {
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
    record_room: {
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
    staff_residence: {
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

  managementContent: {
    superintendent_manager_incharge: {
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
    person_in_charge: {
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
    counselor: {
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
    child_welfare_officer: {
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
    house_mother_father: {
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
    medical_officer: {
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
    para_medical_staff: {
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
    store_keeper_accountant: {
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
    art_craft_music_teacher: {
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
    pt_instructor_yoga_trainer: {
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
    driver: {
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
    cook: {
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
    helper: {
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
    house_keeping: {
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
    security_guard: {
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
    female_superintendent: {
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
    training_child_rights_protection: {
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
    training_care_giving: {
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
    training_rehabilitation: {
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
    training_juvenile_justice_act: {
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
    training_mission_vatsalya: {
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
    training_orientation_care_givers: {
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
    training_orientation_children: {
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
    rehabilitation_placement_officer: {
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
    any_other: {
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

  functionalityContent: {
    special_emergency_medical_care_equipment: {
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
    computer_internet_accessibility: {
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
    records_stored_safely: {
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
    essential_details_emergency_numbers: {
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
    duty_chart: {
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
    menu_chart: {
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
    attendance_status: {
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
    weekly_programme_schedule: {
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
    safe_transport_facility_education: {
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
    separate_facilities_children_staff: {
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
    facilities_support_special_needs: {
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
    visual_needs: {
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
    intellectual_needs: {
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
    hearing_needs: {
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
    others: {
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
    rooms_dormitories_free_unstable: {
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
    privacy_maintained_toilets: {
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
    emergency_medical_care_equipment: {
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

  multipleContent: {
    child_protection_sop: {
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
    complaint_grievance_mechanism: {
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
    child_helpline: {
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
    cctv_cameras: {
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
    children_committees: {
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
    staff_children_interface: {
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
    daily_routine_consultation: {
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
    daily_routine_display: {
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
    safe_toys_available: {
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
    outdoor_play_space: {
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
  multipleContent2: {
    nutritional_requirement_awareness: {
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
    indoor_recreation_facilities: {
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
    outdoor_recreation_facilities: {
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
    innovative_activities_harnessed: {
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
    clean_clothes_toiletries_available: {
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
    clean_mats_sleeping_materials: {
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
    sleeping_material_cleaned: {
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
    rooms_fumigated_disinfected: {
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
    secured_space_personal_belongings: {
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
    fans_available: {
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
    coolers_available: {
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
    air_conditioner_available: {
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
    heaters_for_winter_available: {
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
    nurse_paramedical_staff_available: {
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
    staff_trained_first_aid: {
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
    age_appropriate_education_option_available: {
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
    market_oriented_education_option_available: {
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

  record_financial_Content: {
    bank_accounts_details: {
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
    admission_discharge_register: {
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
    supervision_register: {
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
    medical_file_report: {
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
    attendance_register: {
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
    order_book: {
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
    inquiry_report_file: {
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
    financial_records: {
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
    grant_utilization_register: {
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
    stock_register: {
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
    nutrition_diet_register: {
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
    budget_statement_register: {
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
    visitors_book: {
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
    staff_movement_register: {
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
    personal_belonging_register: {
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
    children_movement_register: {
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
    funding_info_available: {
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
    government_aid_grant: {
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
    national_donors: {
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
    international_donors_fcra: {
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
    corporate_donors: {
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
    own_sources: {
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
    other_sources: {
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

  recommendContent: {
    Date: { type: String, required: true },
    districtDetails: {
      numChildCareInstitutions: { type: Number, required: true },
      childrenHome: { type: Number, required: true },
      observationHome: { type: Number, required: true },
      shelterHome: { type: Number, required: true },
      specialHome: { type: Number, required: true },
      specialAdoptionAgency: { type: Number, required: true },
      numJuvenileJusticeBoards: { type: Number, required: true },
      numChildWelfareCommittees: { type: Number, required: true },
      numDistrictInspectionCommittees: { type: String, required: true },
    },
    registration_recommendation: {
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
    name_of_magistrate: { type: String, required: true },
    name_of_district: { type: String, required: true },
    name_of_state: { type: String, required: true },
  },
});

const Form46AModel = mongoose.model("Form46A", form46ASchema);

module.exports = Form46AModel;
