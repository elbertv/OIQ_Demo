const RAW_PROJECT_DATA =[
  {
    "state_name": "Alabama",
    "state_code": "AL",
    "population": 5024279,
    "cost_index_2020": 87.6,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 170000,
          "max": 680000
        },
        "debt": {
          "min": 85000,
          "max": 340000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 680,
          "max": 750
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4300,
          "max": 6800
        },
        "pop_pct": 0.625,
        "pop_py": 3140174
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 70000,
          "max": 280000
        },
        "debt": {
          "min": 53000,
          "max": 210000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3070,
          "max": 5080
        },
        "pop_pct": 0.308,
        "pop_py": 1547478
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 438000,
          "max": 1752000
        },
        "debt": {
          "min": 88000,
          "max": 350000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10510,
          "max": 21900
        },
        "pop_pct": 0.054000000000000006,
        "pop_py": 271311
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 105000,
          "max": 420000
        },
        "debt": {
          "min": 26000,
          "max": 105000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2450,
          "max": 3940
        },
        "pop_pct": 0.303,
        "pop_py": 1522357
      },
      "Frequent Travelers": {
        "assets": {
          "min": 175000,
          "max": 701000
        },
        "debt": {
          "min": 70000,
          "max": 280000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5260,
          "max": 8760
        },
        "pop_pct": 0.131,
        "pop_py": 658181
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 35000,
          "max": 140000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2190,
          "max": 3680
        },
        "pop_pct": 0.18600000000000003,
        "pop_py": 934516
      },
      "Small Business Owners": {
        "assets": {
          "min": 219000,
          "max": 876000
        },
        "debt": {
          "min": 131000,
          "max": 526000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4820,
          "max": 7880
        },
        "pop_pct": 0.184,
        "pop_py": 924467
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 26000,
          "max": 105000
        },
        "debt": {
          "min": 18000,
          "max": 70000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2450,
          "max": 4200
        },
        "pop_pct": 0.192,
        "pop_py": 964662
      },
      "Families with Children": {
        "assets": {
          "min": 131000,
          "max": 526000
        },
        "debt": {
          "min": 88000,
          "max": 350000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4380,
          "max": 7450
        },
        "pop_pct": 0.34,
        "pop_py": 1708255
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 263000,
          "max": 1051000
        },
        "debt": {
          "min": 18000,
          "max": 70000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2800,
          "max": 4820
        },
        "pop_pct": 0.188,
        "pop_py": 944564
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 350000,
          "max": 1402000
        },
        "debt": {
          "min": 105000,
          "max": 420000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8760,
          "max": 17520
        },
        "pop_pct": 0.02,
        "pop_py": 100486
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 70000
        },
        "debt": {
          "min": 13000,
          "max": 53000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1750,
          "max": 3070
        },
        "pop_pct": 0.29600000000000004,
        "pop_py": 1487187
      },
      "Digital Natives": {
        "assets": {
          "min": 31000,
          "max": 123000
        },
        "debt": {
          "min": 16000,
          "max": 63000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2630,
          "max": 4380
        },
        "pop_pct": 0.15,
        "pop_py": 753642
      },
      "Renters": {
        "assets": {
          "min": 22000,
          "max": 88000
        },
        "debt": {
          "min": 18000,
          "max": 70000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2800,
          "max": 4820
        },
        "pop_pct": 0.23399999999999999,
        "pop_py": 1175681
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 35000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1050,
          "max": 1930
        },
        "pop_pct": 0.17800000000000002,
        "pop_py": 894322
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 35000
        },
        "debt": {
          "min": 35000,
          "max": 140000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1930,
          "max": 3330
        },
        "pop_pct": 0.26,
        "pop_py": 1306313
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 53000
        },
        "debt": {
          "min": 31000,
          "max": 123000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2100,
          "max": 3500
        },
        "pop_pct": 0.225,
        "pop_py": 1130463
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 123000,
          "max": 491000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2280,
          "max": 3680
        },
        "pop_pct": 0.282,
        "pop_py": 1416847
      },
      "Frequent Traveler": {
        "assets": {
          "min": 175000,
          "max": 701000
        },
        "debt": {
          "min": 70000,
          "max": 280000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5260,
          "max": 8760
        },
        "pop_pct": 0.125,
        "pop_py": 628035
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 35000,
          "max": 140000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2190,
          "max": 3680
        },
        "pop_pct": 0.171,
        "pop_py": 859152
      }
    }
  },
  {
    "state_name": "Alaska",
    "state_code": "AK",
    "population": 733391,
    "cost_index_2020": 101.7,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 205000,
          "max": 820000
        },
        "debt": {
          "min": 105000,
          "max": 420000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 700,
          "max": 770
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5100,
          "max": 8200
        },
        "pop_pct": 0.644,
        "pop_py": 472304
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 81000,
          "max": 325000
        },
        "debt": {
          "min": 61000,
          "max": 244000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3560,
          "max": 5900
        },
        "pop_pct": 0.23,
        "pop_py": 168680
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 509000,
          "max": 2034000
        },
        "debt": {
          "min": 102000,
          "max": 407000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12200,
          "max": 25430
        },
        "pop_pct": 0.07400000000000001,
        "pop_py": 54271
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 122000,
          "max": 488000
        },
        "debt": {
          "min": 31000,
          "max": 122000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2850,
          "max": 4580
        },
        "pop_pct": 0.22399999999999998,
        "pop_py": 164280
      },
      "Frequent Travelers": {
        "assets": {
          "min": 203000,
          "max": 814000
        },
        "debt": {
          "min": 81000,
          "max": 325000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6100,
          "max": 10170
        },
        "pop_pct": 0.17,
        "pop_py": 124676
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 41000,
          "max": 163000
        },
        "debt": {
          "min": 25000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2540,
          "max": 4270
        },
        "pop_pct": 0.23199999999999998,
        "pop_py": 170147
      },
      "Small Business Owners": {
        "assets": {
          "min": 254000,
          "max": 1017000
        },
        "debt": {
          "min": 153000,
          "max": 610000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5590,
          "max": 9150
        },
        "pop_pct": 0.187,
        "pop_py": 137144
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 31000,
          "max": 122000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2850,
          "max": 4880
        },
        "pop_pct": 0.13,
        "pop_py": 95341
      },
      "Families with Children": {
        "assets": {
          "min": 153000,
          "max": 610000
        },
        "debt": {
          "min": 102000,
          "max": 407000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5090,
          "max": 8640
        },
        "pop_pct": 0.364,
        "pop_py": 266954
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 305000,
          "max": 1220000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3250,
          "max": 5590
        },
        "pop_pct": 0.312,
        "pop_py": 228818
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 407000,
          "max": 1627000
        },
        "debt": {
          "min": 122000,
          "max": 488000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10170,
          "max": 20340
        },
        "pop_pct": 0.155,
        "pop_py": 113676
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 20000,
          "max": 81000
        },
        "debt": {
          "min": 15000,
          "max": 61000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2030,
          "max": 3560
        },
        "pop_pct": 0.228,
        "pop_py": 167213
      },
      "Digital Natives": {
        "assets": {
          "min": 36000,
          "max": 142000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3050,
          "max": 5090
        },
        "pop_pct": 0.271,
        "pop_py": 198749
      },
      "Renters": {
        "assets": {
          "min": 25000,
          "max": 102000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3250,
          "max": 5590
        },
        "pop_pct": 0.266,
        "pop_py": 195082
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 20000
        },
        "debt": {
          "min": 10000,
          "max": 41000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1220,
          "max": 2240
        },
        "pop_pct": 0.231,
        "pop_py": 169413
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 41000
        },
        "debt": {
          "min": 41000,
          "max": 163000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2240,
          "max": 3860
        },
        "pop_pct": 0.24600000000000002,
        "pop_py": 180414
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 61000
        },
        "debt": {
          "min": 36000,
          "max": 142000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2440,
          "max": 4070
        },
        "pop_pct": 0.24100000000000002,
        "pop_py": 176747
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 142000,
          "max": 570000
        },
        "debt": {
          "min": 25000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2640,
          "max": 4270
        },
        "pop_pct": 0.287,
        "pop_py": 210483
      },
      "Frequent Traveler": {
        "assets": {
          "min": 203000,
          "max": 814000
        },
        "debt": {
          "min": 81000,
          "max": 325000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6100,
          "max": 10170
        },
        "pop_pct": 0.126,
        "pop_py": 92407
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 41000,
          "max": 163000
        },
        "debt": {
          "min": 25000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2540,
          "max": 4270
        },
        "pop_pct": 0.1,
        "pop_py": 73339
      }
    }
  },
  {
    "state_name": "Arizona",
    "state_code": "AZ",
    "population": 7151502,
    "cost_index_2020": 91.8,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 185000,
          "max": 740000
        },
        "debt": {
          "min": 92000,
          "max": 370000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4600,
          "max": 7400
        },
        "pop_pct": 0.629,
        "pop_py": 4498295
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 73000,
          "max": 294000
        },
        "debt": {
          "min": 55000,
          "max": 220000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3210,
          "max": 5320
        },
        "pop_pct": 0.276,
        "pop_py": 1973815
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 459000,
          "max": 1836000
        },
        "debt": {
          "min": 92000,
          "max": 367000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11020,
          "max": 22950
        },
        "pop_pct": 0.023,
        "pop_py": 164485
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 110000,
          "max": 441000
        },
        "debt": {
          "min": 28000,
          "max": 110000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4130
        },
        "pop_pct": 0.303,
        "pop_py": 2166905
      },
      "Frequent Travelers": {
        "assets": {
          "min": 184000,
          "max": 734000
        },
        "debt": {
          "min": 73000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9180
        },
        "pop_pct": 0.161,
        "pop_py": 1151392
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3860
        },
        "pop_pct": 0.14300000000000002,
        "pop_py": 1022665
      },
      "Small Business Owners": {
        "assets": {
          "min": 229000,
          "max": 918000
        },
        "debt": {
          "min": 138000,
          "max": 551000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5050,
          "max": 8260
        },
        "pop_pct": 0.155,
        "pop_py": 1108483
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 110000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4410
        },
        "pop_pct": 0.14800000000000002,
        "pop_py": 1058422
      },
      "Families with Children": {
        "assets": {
          "min": 138000,
          "max": 551000
        },
        "debt": {
          "min": 92000,
          "max": 367000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4590,
          "max": 7800
        },
        "pop_pct": 0.366,
        "pop_py": 2617450
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 275000,
          "max": 1102000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.13699999999999998,
        "pop_py": 979756
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 367000,
          "max": 1469000
        },
        "debt": {
          "min": 110000,
          "max": 441000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9180,
          "max": 18360
        },
        "pop_pct": 0.032,
        "pop_py": 228848
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 73000
        },
        "debt": {
          "min": 14000,
          "max": 55000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1840,
          "max": 3210
        },
        "pop_pct": 0.265,
        "pop_py": 1895148
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 129000
        },
        "debt": {
          "min": 17000,
          "max": 66000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2750,
          "max": 4590
        },
        "pop_pct": 0.247,
        "pop_py": 1766421
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 92000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.34299999999999997,
        "pop_py": 2452965
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 37000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1100,
          "max": 2020
        },
        "pop_pct": 0.157,
        "pop_py": 1122786
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 37000
        },
        "debt": {
          "min": 37000,
          "max": 147000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2020,
          "max": 3490
        },
        "pop_pct": 0.335,
        "pop_py": 2395753
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 55000
        },
        "debt": {
          "min": 32000,
          "max": 129000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2200,
          "max": 3670
        },
        "pop_pct": 0.21899999999999997,
        "pop_py": 1566179
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 129000,
          "max": 514000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2390,
          "max": 3860
        },
        "pop_pct": 0.259,
        "pop_py": 1852239
      },
      "Frequent Traveler": {
        "assets": {
          "min": 184000,
          "max": 734000
        },
        "debt": {
          "min": 73000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9180
        },
        "pop_pct": 0.096,
        "pop_py": 686544
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3860
        },
        "pop_pct": 0.16899999999999998,
        "pop_py": 1208604
      }
    }
  },
  {
    "state_name": "Arkansas",
    "state_code": "AR",
    "population": 3011524,
    "cost_index_2020": 85.6,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 165000,
          "max": 660000
        },
        "debt": {
          "min": 82000,
          "max": 330000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 675,
          "max": 745
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4200,
          "max": 6600
        },
        "pop_pct": 0.654,
        "pop_py": 1969537
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 68000,
          "max": 274000
        },
        "debt": {
          "min": 51000,
          "max": 205000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3000,
          "max": 4960
        },
        "pop_pct": 0.28,
        "pop_py": 843227
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 428000,
          "max": 1712000
        },
        "debt": {
          "min": 86000,
          "max": 342000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10270,
          "max": 21400
        },
        "pop_pct": 0.011000000000000001,
        "pop_py": 33127
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 103000,
          "max": 411000
        },
        "debt": {
          "min": 26000,
          "max": 103000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2400,
          "max": 3850
        },
        "pop_pct": 0.29,
        "pop_py": 873342
      },
      "Frequent Travelers": {
        "assets": {
          "min": 171000,
          "max": 685000
        },
        "debt": {
          "min": 68000,
          "max": 274000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5140,
          "max": 8560
        },
        "pop_pct": 0.135,
        "pop_py": 406556
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 34000,
          "max": 137000
        },
        "debt": {
          "min": 21000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2140,
          "max": 3600
        },
        "pop_pct": 0.152,
        "pop_py": 457752
      },
      "Small Business Owners": {
        "assets": {
          "min": 214000,
          "max": 856000
        },
        "debt": {
          "min": 128000,
          "max": 514000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4710,
          "max": 7700
        },
        "pop_pct": 0.142,
        "pop_py": 427636
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 26000,
          "max": 103000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2400,
          "max": 4110
        },
        "pop_pct": 0.14800000000000002,
        "pop_py": 445706
      },
      "Families with Children": {
        "assets": {
          "min": 128000,
          "max": 514000
        },
        "debt": {
          "min": 86000,
          "max": 342000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4280,
          "max": 7280
        },
        "pop_pct": 0.335,
        "pop_py": 1008861
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 257000,
          "max": 1027000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2740,
          "max": 4710
        },
        "pop_pct": 0.179,
        "pop_py": 539063
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 342000,
          "max": 1370000
        },
        "debt": {
          "min": 103000,
          "max": 411000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8560,
          "max": 17120
        },
        "pop_pct": 0.032,
        "pop_py": 96369
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 17000,
          "max": 68000
        },
        "debt": {
          "min": 13000,
          "max": 51000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1710,
          "max": 3000
        },
        "pop_pct": 0.213,
        "pop_py": 641455
      },
      "Digital Natives": {
        "assets": {
          "min": 30000,
          "max": 120000
        },
        "debt": {
          "min": 15000,
          "max": 62000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4280
        },
        "pop_pct": 0.21600000000000003,
        "pop_py": 650489
      },
      "Renters": {
        "assets": {
          "min": 21000,
          "max": 86000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2740,
          "max": 4710
        },
        "pop_pct": 0.22899999999999998,
        "pop_py": 689639
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 17000
        },
        "debt": {
          "min": 9000,
          "max": 34000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1030,
          "max": 1880
        },
        "pop_pct": 0.185,
        "pop_py": 557132
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 34000
        },
        "debt": {
          "min": 34000,
          "max": 137000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1880,
          "max": 3250
        },
        "pop_pct": 0.3,
        "pop_py": 903457
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 51000
        },
        "debt": {
          "min": 30000,
          "max": 120000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2050,
          "max": 3420
        },
        "pop_pct": 0.28300000000000003,
        "pop_py": 852261
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 120000,
          "max": 479000
        },
        "debt": {
          "min": 21000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2230,
          "max": 3600
        },
        "pop_pct": 0.284,
        "pop_py": 855273
      },
      "Frequent Traveler": {
        "assets": {
          "min": 171000,
          "max": 685000
        },
        "debt": {
          "min": 68000,
          "max": 274000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5140,
          "max": 8560
        },
        "pop_pct": 0.095,
        "pop_py": 286095
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 34000,
          "max": 137000
        },
        "debt": {
          "min": 21000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2140,
          "max": 3600
        },
        "pop_pct": 0.079,
        "pop_py": 237910
      }
    }
  },
  {
    "state_name": "California",
    "state_code": "CA",
    "population": 39538223,
    "cost_index_2020": 112.6,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 235000,
          "max": 940000
        },
        "debt": {
          "min": 125000,
          "max": 500000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6000,
          "max": 9500
        },
        "pop_pct": 0.517,
        "pop_py": 20441261
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 90000,
          "max": 360000
        },
        "debt": {
          "min": 68000,
          "max": 270000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3940,
          "max": 6530
        },
        "pop_pct": 0.311,
        "pop_py": 12296387
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 563000,
          "max": 2252000
        },
        "debt": {
          "min": 113000,
          "max": 450000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 13510,
          "max": 28150
        },
        "pop_pct": 0.098,
        "pop_py": 3874746
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 135000,
          "max": 540000
        },
        "debt": {
          "min": 34000,
          "max": 135000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 3150,
          "max": 5070
        },
        "pop_pct": 0.312,
        "pop_py": 12335926
      },
      "Frequent Travelers": {
        "assets": {
          "min": 225000,
          "max": 901000
        },
        "debt": {
          "min": 90000,
          "max": 360000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6760,
          "max": 11260
        },
        "pop_pct": 0.311,
        "pop_py": 12296387
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 45000,
          "max": 180000
        },
        "debt": {
          "min": 28000,
          "max": 113000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2810,
          "max": 4730
        },
        "pop_pct": 0.11800000000000001,
        "pop_py": 4665510
      },
      "Small Business Owners": {
        "assets": {
          "min": 282000,
          "max": 1126000
        },
        "debt": {
          "min": 169000,
          "max": 676000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 6190,
          "max": 10130
        },
        "pop_pct": 0.16,
        "pop_py": 6326116
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 34000,
          "max": 135000
        },
        "debt": {
          "min": 23000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 3150,
          "max": 5400
        },
        "pop_pct": 0.25,
        "pop_py": 9884556
      },
      "Families with Children": {
        "assets": {
          "min": 169000,
          "max": 676000
        },
        "debt": {
          "min": 113000,
          "max": 450000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5630,
          "max": 9570
        },
        "pop_pct": 0.281,
        "pop_py": 11110241
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 338000,
          "max": 1351000
        },
        "debt": {
          "min": 23000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3600,
          "max": 6190
        },
        "pop_pct": 0.266,
        "pop_py": 10517167
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 450000,
          "max": 1802000
        },
        "debt": {
          "min": 135000,
          "max": 540000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 11260,
          "max": 22520
        },
        "pop_pct": 0.135,
        "pop_py": 5337660
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 23000,
          "max": 90000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2250,
          "max": 3940
        },
        "pop_pct": 0.268,
        "pop_py": 10596244
      },
      "Digital Natives": {
        "assets": {
          "min": 39000,
          "max": 158000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3380,
          "max": 5630
        },
        "pop_pct": 0.271,
        "pop_py": 10714858
      },
      "Renters": {
        "assets": {
          "min": 28000,
          "max": 113000
        },
        "debt": {
          "min": 23000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3600,
          "max": 6190
        },
        "pop_pct": 0.402,
        "pop_py": 15894366
      },
      "Students 18+ Age": {
        "assets": {
          "min": 6000,
          "max": 23000
        },
        "debt": {
          "min": 11000,
          "max": 45000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1350,
          "max": 2480
        },
        "pop_pct": 0.17600000000000002,
        "pop_py": 6958727
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 45000
        },
        "debt": {
          "min": 45000,
          "max": 180000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2480,
          "max": 4280
        },
        "pop_pct": 0.134,
        "pop_py": 5298122
      },
      "At-Risk Customers": {
        "assets": {
          "min": 17000,
          "max": 68000
        },
        "debt": {
          "min": 39000,
          "max": 158000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2700,
          "max": 4500
        },
        "pop_pct": 0.21100000000000002,
        "pop_py": 8342565
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 158000,
          "max": 631000
        },
        "debt": {
          "min": 28000,
          "max": 113000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2930,
          "max": 4730
        },
        "pop_pct": 0.215,
        "pop_py": 8500718
      },
      "Frequent Traveler": {
        "assets": {
          "min": 225000,
          "max": 901000
        },
        "debt": {
          "min": 90000,
          "max": 360000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6760,
          "max": 11260
        },
        "pop_pct": 0.22699999999999998,
        "pop_py": 8975177
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 45000,
          "max": 180000
        },
        "debt": {
          "min": 28000,
          "max": 113000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2810,
          "max": 4730
        },
        "pop_pct": 0.129,
        "pop_py": 5100431
      }
    }
  },
  {
    "state_name": "Colorado",
    "state_code": "CO",
    "population": 5773714,
    "cost_index_2020": 102.3,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 210000,
          "max": 840000
        },
        "debt": {
          "min": 108000,
          "max": 430000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 700,
          "max": 770
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5200,
          "max": 8300
        },
        "pop_pct": 0.515,
        "pop_py": 2973463
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 82000,
          "max": 327000
        },
        "debt": {
          "min": 61000,
          "max": 246000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3580,
          "max": 5930
        },
        "pop_pct": 0.284,
        "pop_py": 1639735
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 511000,
          "max": 2046000
        },
        "debt": {
          "min": 102000,
          "max": 409000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12280,
          "max": 25570
        },
        "pop_pct": 0.046,
        "pop_py": 265591
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 123000,
          "max": 491000
        },
        "debt": {
          "min": 31000,
          "max": 123000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2860,
          "max": 4600
        },
        "pop_pct": 0.32799999999999996,
        "pop_py": 1893778
      },
      "Frequent Travelers": {
        "assets": {
          "min": 205000,
          "max": 818000
        },
        "debt": {
          "min": 82000,
          "max": 327000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6140,
          "max": 10230
        },
        "pop_pct": 0.18899999999999997,
        "pop_py": 1091232
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 41000,
          "max": 164000
        },
        "debt": {
          "min": 26000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2560,
          "max": 4300
        },
        "pop_pct": 0.161,
        "pop_py": 929568
      },
      "Small Business Owners": {
        "assets": {
          "min": 256000,
          "max": 1023000
        },
        "debt": {
          "min": 153000,
          "max": 614000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5630,
          "max": 9210
        },
        "pop_pct": 0.165,
        "pop_py": 952663
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 31000,
          "max": 123000
        },
        "debt": {
          "min": 20000,
          "max": 82000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2860,
          "max": 4910
        },
        "pop_pct": 0.161,
        "pop_py": 929568
      },
      "Families with Children": {
        "assets": {
          "min": 153000,
          "max": 614000
        },
        "debt": {
          "min": 102000,
          "max": 409000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5120,
          "max": 8700
        },
        "pop_pct": 0.381,
        "pop_py": 2199785
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 307000,
          "max": 1228000
        },
        "debt": {
          "min": 20000,
          "max": 82000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3270,
          "max": 5630
        },
        "pop_pct": 0.179,
        "pop_py": 1033495
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 409000,
          "max": 1637000
        },
        "debt": {
          "min": 123000,
          "max": 491000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10230,
          "max": 20460
        },
        "pop_pct": 0.07,
        "pop_py": 404160
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 20000,
          "max": 82000
        },
        "debt": {
          "min": 15000,
          "max": 61000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2050,
          "max": 3580
        },
        "pop_pct": 0.24600000000000002,
        "pop_py": 1420334
      },
      "Digital Natives": {
        "assets": {
          "min": 36000,
          "max": 143000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3070,
          "max": 5120
        },
        "pop_pct": 0.23800000000000002,
        "pop_py": 1374144
      },
      "Renters": {
        "assets": {
          "min": 26000,
          "max": 102000
        },
        "debt": {
          "min": 20000,
          "max": 82000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3270,
          "max": 5630
        },
        "pop_pct": 0.36700000000000005,
        "pop_py": 2118953
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 20000
        },
        "debt": {
          "min": 10000,
          "max": 41000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1230,
          "max": 2250
        },
        "pop_pct": 0.18899999999999997,
        "pop_py": 1091232
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 41000
        },
        "debt": {
          "min": 41000,
          "max": 164000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2250,
          "max": 3890
        },
        "pop_pct": 0.23199999999999998,
        "pop_py": 1339502
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 61000
        },
        "debt": {
          "min": 36000,
          "max": 143000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2460,
          "max": 4090
        },
        "pop_pct": 0.147,
        "pop_py": 848736
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 143000,
          "max": 573000
        },
        "debt": {
          "min": 26000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4300
        },
        "pop_pct": 0.302,
        "pop_py": 1743662
      },
      "Frequent Traveler": {
        "assets": {
          "min": 205000,
          "max": 818000
        },
        "debt": {
          "min": 82000,
          "max": 327000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6140,
          "max": 10230
        },
        "pop_pct": 0.131,
        "pop_py": 756357
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 41000,
          "max": 164000
        },
        "debt": {
          "min": 26000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2560,
          "max": 4300
        },
        "pop_pct": 0.065,
        "pop_py": 375291
      }
    }
  },
  {
    "state_name": "Connecticut",
    "state_code": "CT",
    "population": 3605944,
    "cost_index_2020": 106.2,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 220000,
          "max": 880000
        },
        "debt": {
          "min": 115000,
          "max": 460000
        },
        "debt_to_income_ratio": 0.31,
        "credit_score": {
          "min": 705,
          "max": 775
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5500,
          "max": 8800
        },
        "pop_pct": 0.594,
        "pop_py": 2141931
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 85000,
          "max": 340000
        },
        "debt": {
          "min": 64000,
          "max": 255000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3720,
          "max": 6160
        },
        "pop_pct": 0.294,
        "pop_py": 1060148
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 531000,
          "max": 2124000
        },
        "debt": {
          "min": 106000,
          "max": 425000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12740,
          "max": 26550
        },
        "pop_pct": 0.1,
        "pop_py": 360594
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 127000,
          "max": 510000
        },
        "debt": {
          "min": 32000,
          "max": 127000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2970,
          "max": 4780
        },
        "pop_pct": 0.262,
        "pop_py": 944757
      },
      "Frequent Travelers": {
        "assets": {
          "min": 212000,
          "max": 850000
        },
        "debt": {
          "min": 85000,
          "max": 340000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6370,
          "max": 10620
        },
        "pop_pct": 0.188,
        "pop_py": 677917
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 42000,
          "max": 170000
        },
        "debt": {
          "min": 27000,
          "max": 106000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4460
        },
        "pop_pct": 0.19,
        "pop_py": 685129
      },
      "Small Business Owners": {
        "assets": {
          "min": 266000,
          "max": 1062000
        },
        "debt": {
          "min": 159000,
          "max": 637000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5840,
          "max": 9560
        },
        "pop_pct": 0.154,
        "pop_py": 555315
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 32000,
          "max": 127000
        },
        "debt": {
          "min": 21000,
          "max": 85000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2970,
          "max": 5100
        },
        "pop_pct": 0.204,
        "pop_py": 735613
      },
      "Families with Children": {
        "assets": {
          "min": 159000,
          "max": 637000
        },
        "debt": {
          "min": 106000,
          "max": 425000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5310,
          "max": 9030
        },
        "pop_pct": 0.299,
        "pop_py": 1078177
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 319000,
          "max": 1274000
        },
        "debt": {
          "min": 21000,
          "max": 85000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3400,
          "max": 5840
        },
        "pop_pct": 0.177,
        "pop_py": 638252
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 425000,
          "max": 1699000
        },
        "debt": {
          "min": 127000,
          "max": 510000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10620,
          "max": 21240
        },
        "pop_pct": 0.139,
        "pop_py": 501226
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 21000,
          "max": 85000
        },
        "debt": {
          "min": 16000,
          "max": 64000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2120,
          "max": 3720
        },
        "pop_pct": 0.19699999999999998,
        "pop_py": 710371
      },
      "Digital Natives": {
        "assets": {
          "min": 37000,
          "max": 149000
        },
        "debt": {
          "min": 19000,
          "max": 76000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3190,
          "max": 5310
        },
        "pop_pct": 0.252,
        "pop_py": 908698
      },
      "Renters": {
        "assets": {
          "min": 27000,
          "max": 106000
        },
        "debt": {
          "min": 21000,
          "max": 85000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3400,
          "max": 5840
        },
        "pop_pct": 0.35200000000000004,
        "pop_py": 1269292
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 21000
        },
        "debt": {
          "min": 11000,
          "max": 42000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1270,
          "max": 2340
        },
        "pop_pct": 0.127,
        "pop_py": 457955
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 42000
        },
        "debt": {
          "min": 42000,
          "max": 170000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2340,
          "max": 4040
        },
        "pop_pct": 0.223,
        "pop_py": 804126
      },
      "At-Risk Customers": {
        "assets": {
          "min": 16000,
          "max": 64000
        },
        "debt": {
          "min": 37000,
          "max": 149000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2550,
          "max": 4250
        },
        "pop_pct": 0.131,
        "pop_py": 472379
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 149000,
          "max": 595000
        },
        "debt": {
          "min": 27000,
          "max": 106000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2760,
          "max": 4460
        },
        "pop_pct": 0.32,
        "pop_py": 1153902
      },
      "Frequent Traveler": {
        "assets": {
          "min": 212000,
          "max": 850000
        },
        "debt": {
          "min": 85000,
          "max": 340000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6370,
          "max": 10620
        },
        "pop_pct": 0.121,
        "pop_py": 436319
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 42000,
          "max": 170000
        },
        "debt": {
          "min": 27000,
          "max": 106000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4460
        },
        "pop_pct": 0.079,
        "pop_py": 284870
      }
    }
  },
  {
    "state_name": "Delaware",
    "state_code": "DE",
    "population": 989948,
    "cost_index_2020": 97.9,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 198000,
          "max": 790000
        },
        "debt": {
          "min": 99000,
          "max": 395000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 695,
          "max": 765
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4950,
          "max": 7900
        },
        "pop_pct": 0.529,
        "pop_py": 523682
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 78000,
          "max": 313000
        },
        "debt": {
          "min": 59000,
          "max": 235000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3430,
          "max": 5680
        },
        "pop_pct": 0.27699999999999997,
        "pop_py": 274216
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 490000,
          "max": 1958000
        },
        "debt": {
          "min": 98000,
          "max": 392000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11750,
          "max": 24480
        },
        "pop_pct": 0.098,
        "pop_py": 97015
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 117000,
          "max": 470000
        },
        "debt": {
          "min": 29000,
          "max": 117000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2740,
          "max": 4410
        },
        "pop_pct": 0.37799999999999995,
        "pop_py": 374200
      },
      "Frequent Travelers": {
        "assets": {
          "min": 196000,
          "max": 783000
        },
        "debt": {
          "min": 78000,
          "max": 313000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5870,
          "max": 9790
        },
        "pop_pct": 0.146,
        "pop_py": 144532
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 39000,
          "max": 157000
        },
        "debt": {
          "min": 24000,
          "max": 98000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2450,
          "max": 4110
        },
        "pop_pct": 0.158,
        "pop_py": 156412
      },
      "Small Business Owners": {
        "assets": {
          "min": 245000,
          "max": 979000
        },
        "debt": {
          "min": 147000,
          "max": 587000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5380,
          "max": 8810
        },
        "pop_pct": 0.21100000000000002,
        "pop_py": 208879
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 29000,
          "max": 117000
        },
        "debt": {
          "min": 20000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2740,
          "max": 4700
        },
        "pop_pct": 0.165,
        "pop_py": 163341
      },
      "Families with Children": {
        "assets": {
          "min": 147000,
          "max": 587000
        },
        "debt": {
          "min": 98000,
          "max": 392000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4900,
          "max": 8320
        },
        "pop_pct": 0.315,
        "pop_py": 311834
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 294000,
          "max": 1175000
        },
        "debt": {
          "min": 20000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3130,
          "max": 5380
        },
        "pop_pct": 0.22,
        "pop_py": 217789
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 392000,
          "max": 1566000
        },
        "debt": {
          "min": 117000,
          "max": 470000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9790,
          "max": 19580
        },
        "pop_pct": 0.068,
        "pop_py": 67316
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 20000,
          "max": 78000
        },
        "debt": {
          "min": 15000,
          "max": 59000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1960,
          "max": 3430
        },
        "pop_pct": 0.247,
        "pop_py": 244517
      },
      "Digital Natives": {
        "assets": {
          "min": 34000,
          "max": 137000
        },
        "debt": {
          "min": 18000,
          "max": 70000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2940,
          "max": 4900
        },
        "pop_pct": 0.244,
        "pop_py": 241547
      },
      "Renters": {
        "assets": {
          "min": 24000,
          "max": 98000
        },
        "debt": {
          "min": 20000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3130,
          "max": 5380
        },
        "pop_pct": 0.295,
        "pop_py": 292035
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 20000
        },
        "debt": {
          "min": 10000,
          "max": 39000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1170,
          "max": 2150
        },
        "pop_pct": 0.121,
        "pop_py": 119784
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 39000
        },
        "debt": {
          "min": 39000,
          "max": 157000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2150,
          "max": 3720
        },
        "pop_pct": 0.22899999999999998,
        "pop_py": 226698
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 59000
        },
        "debt": {
          "min": 34000,
          "max": 137000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2350,
          "max": 3920
        },
        "pop_pct": 0.304,
        "pop_py": 300944
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 137000,
          "max": 548000
        },
        "debt": {
          "min": 24000,
          "max": 98000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2550,
          "max": 4110
        },
        "pop_pct": 0.228,
        "pop_py": 225708
      },
      "Frequent Traveler": {
        "assets": {
          "min": 196000,
          "max": 783000
        },
        "debt": {
          "min": 78000,
          "max": 313000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5870,
          "max": 9790
        },
        "pop_pct": 0.139,
        "pop_py": 137603
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 39000,
          "max": 157000
        },
        "debt": {
          "min": 24000,
          "max": 98000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2450,
          "max": 4110
        },
        "pop_pct": 0.115,
        "pop_py": 113844
      }
    }
  },
  {
    "state_name": "Florida",
    "state_code": "FL",
    "population": 21538187,
    "cost_index_2020": 102.3,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 210000,
          "max": 840000
        },
        "debt": {
          "min": 108000,
          "max": 430000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 700,
          "max": 770
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5200,
          "max": 8300
        },
        "pop_pct": 0.642,
        "pop_py": 13827516
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 82000,
          "max": 327000
        },
        "debt": {
          "min": 61000,
          "max": 246000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3580,
          "max": 5930
        },
        "pop_pct": 0.285,
        "pop_py": 6138383
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 511000,
          "max": 2046000
        },
        "debt": {
          "min": 102000,
          "max": 409000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12280,
          "max": 25570
        },
        "pop_pct": 0.043,
        "pop_py": 926142
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 123000,
          "max": 491000
        },
        "debt": {
          "min": 31000,
          "max": 123000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2860,
          "max": 4600
        },
        "pop_pct": 0.307,
        "pop_py": 6612223
      },
      "Frequent Travelers": {
        "assets": {
          "min": 205000,
          "max": 818000
        },
        "debt": {
          "min": 82000,
          "max": 327000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6140,
          "max": 10230
        },
        "pop_pct": 0.11,
        "pop_py": 2369201
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 41000,
          "max": 164000
        },
        "debt": {
          "min": 26000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2560,
          "max": 4300
        },
        "pop_pct": 0.17800000000000002,
        "pop_py": 3833797
      },
      "Small Business Owners": {
        "assets": {
          "min": 256000,
          "max": 1023000
        },
        "debt": {
          "min": 153000,
          "max": 614000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5630,
          "max": 9210
        },
        "pop_pct": 0.203,
        "pop_py": 4372252
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 31000,
          "max": 123000
        },
        "debt": {
          "min": 20000,
          "max": 82000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2860,
          "max": 4910
        },
        "pop_pct": 0.127,
        "pop_py": 2735350
      },
      "Families with Children": {
        "assets": {
          "min": 153000,
          "max": 614000
        },
        "debt": {
          "min": 102000,
          "max": 409000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5120,
          "max": 8700
        },
        "pop_pct": 0.316,
        "pop_py": 6806067
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 307000,
          "max": 1228000
        },
        "debt": {
          "min": 20000,
          "max": 82000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3270,
          "max": 5630
        },
        "pop_pct": 0.198,
        "pop_py": 4264561
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 409000,
          "max": 1637000
        },
        "debt": {
          "min": 123000,
          "max": 491000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10230,
          "max": 20460
        },
        "pop_pct": 0.10400000000000001,
        "pop_py": 2239971
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 20000,
          "max": 82000
        },
        "debt": {
          "min": 15000,
          "max": 61000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2050,
          "max": 3580
        },
        "pop_pct": 0.253,
        "pop_py": 5449161
      },
      "Digital Natives": {
        "assets": {
          "min": 36000,
          "max": 143000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3070,
          "max": 5120
        },
        "pop_pct": 0.326,
        "pop_py": 7021449
      },
      "Renters": {
        "assets": {
          "min": 26000,
          "max": 102000
        },
        "debt": {
          "min": 20000,
          "max": 82000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3270,
          "max": 5630
        },
        "pop_pct": 0.265,
        "pop_py": 5707620
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 20000
        },
        "debt": {
          "min": 10000,
          "max": 41000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1230,
          "max": 2250
        },
        "pop_pct": 0.158,
        "pop_py": 3403034
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 41000
        },
        "debt": {
          "min": 41000,
          "max": 164000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2250,
          "max": 3890
        },
        "pop_pct": 0.226,
        "pop_py": 4867630
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 61000
        },
        "debt": {
          "min": 36000,
          "max": 143000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2460,
          "max": 4090
        },
        "pop_pct": 0.20199999999999999,
        "pop_py": 4350714
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 143000,
          "max": 573000
        },
        "debt": {
          "min": 26000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4300
        },
        "pop_pct": 0.284,
        "pop_py": 6116845
      },
      "Frequent Traveler": {
        "assets": {
          "min": 205000,
          "max": 818000
        },
        "debt": {
          "min": 82000,
          "max": 327000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6140,
          "max": 10230
        },
        "pop_pct": 0.047,
        "pop_py": 1012295
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 41000,
          "max": 164000
        },
        "debt": {
          "min": 26000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2560,
          "max": 4300
        },
        "pop_pct": 0.157,
        "pop_py": 3381495
      }
    }
  },
  {
    "state_name": "Georgia",
    "state_code": "GA",
    "population": 10711908,
    "cost_index_2020": 95.7,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 192000,
          "max": 768000
        },
        "debt": {
          "min": 96000,
          "max": 384000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4800,
          "max": 7680
        },
        "pop_pct": 0.5710000000000001,
        "pop_py": 6116499
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 77000,
          "max": 306000
        },
        "debt": {
          "min": 57000,
          "max": 230000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3350,
          "max": 5550
        },
        "pop_pct": 0.299,
        "pop_py": 3202860
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 479000,
          "max": 1914000
        },
        "debt": {
          "min": 96000,
          "max": 383000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11480,
          "max": 23930
        },
        "pop_pct": 0.008,
        "pop_py": 85695
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 115000,
          "max": 459000
        },
        "debt": {
          "min": 29000,
          "max": 115000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2680,
          "max": 4310
        },
        "pop_pct": 0.361,
        "pop_py": 3866999
      },
      "Frequent Travelers": {
        "assets": {
          "min": 191000,
          "max": 766000
        },
        "debt": {
          "min": 77000,
          "max": 306000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5740,
          "max": 9570
        },
        "pop_pct": 0.174,
        "pop_py": 1863872
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 38000,
          "max": 153000
        },
        "debt": {
          "min": 24000,
          "max": 96000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2390,
          "max": 4020
        },
        "pop_pct": 0.175,
        "pop_py": 1874584
      },
      "Small Business Owners": {
        "assets": {
          "min": 239000,
          "max": 957000
        },
        "debt": {
          "min": 144000,
          "max": 574000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5260,
          "max": 8610
        },
        "pop_pct": 0.24600000000000002,
        "pop_py": 2635129
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 29000,
          "max": 115000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2680,
          "max": 4590
        },
        "pop_pct": 0.136,
        "pop_py": 1456819
      },
      "Families with Children": {
        "assets": {
          "min": 144000,
          "max": 574000
        },
        "debt": {
          "min": 96000,
          "max": 383000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4780,
          "max": 8130
        },
        "pop_pct": 0.349,
        "pop_py": 3738456
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 287000,
          "max": 1148000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3060,
          "max": 5260
        },
        "pop_pct": 0.158,
        "pop_py": 1692481
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 383000,
          "max": 1531000
        },
        "debt": {
          "min": 115000,
          "max": 459000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9570,
          "max": 19140
        },
        "pop_pct": 0.027000000000000003,
        "pop_py": 289222
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 19000,
          "max": 77000
        },
        "debt": {
          "min": 14000,
          "max": 57000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1910,
          "max": 3350
        },
        "pop_pct": 0.248,
        "pop_py": 2656553
      },
      "Digital Natives": {
        "assets": {
          "min": 33000,
          "max": 134000
        },
        "debt": {
          "min": 17000,
          "max": 69000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2870,
          "max": 4780
        },
        "pop_pct": 0.26,
        "pop_py": 2785096
      },
      "Renters": {
        "assets": {
          "min": 24000,
          "max": 96000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3060,
          "max": 5260
        },
        "pop_pct": 0.303,
        "pop_py": 3245708
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 19000
        },
        "debt": {
          "min": 10000,
          "max": 38000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1150,
          "max": 2110
        },
        "pop_pct": 0.17,
        "pop_py": 1821024
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 38000
        },
        "debt": {
          "min": 38000,
          "max": 153000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2110,
          "max": 3640
        },
        "pop_pct": 0.17600000000000002,
        "pop_py": 1885296
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 57000
        },
        "debt": {
          "min": 33000,
          "max": 134000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3830
        },
        "pop_pct": 0.17600000000000002,
        "pop_py": 1885296
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 134000,
          "max": 536000
        },
        "debt": {
          "min": 24000,
          "max": 96000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2490,
          "max": 4020
        },
        "pop_pct": 0.306,
        "pop_py": 3277844
      },
      "Frequent Traveler": {
        "assets": {
          "min": 191000,
          "max": 766000
        },
        "debt": {
          "min": 77000,
          "max": 306000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5740,
          "max": 9570
        },
        "pop_pct": 0.10800000000000001,
        "pop_py": 1156886
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 38000,
          "max": 153000
        },
        "debt": {
          "min": 24000,
          "max": 96000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2390,
          "max": 4020
        },
        "pop_pct": 0.054000000000000006,
        "pop_py": 578443
      }
    }
  },
  {
    "state_name": "Hawaii",
    "state_code": "HI",
    "population": 1455271,
    "cost_index_2020": 111.1,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 230000,
          "max": 920000
        },
        "debt": {
          "min": 122000,
          "max": 488000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5900,
          "max": 9200
        },
        "pop_pct": 0.596,
        "pop_py": 867342
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 89000,
          "max": 356000
        },
        "debt": {
          "min": 67000,
          "max": 267000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3890,
          "max": 6440
        },
        "pop_pct": 0.253,
        "pop_py": 368184
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 556000,
          "max": 2222000
        },
        "debt": {
          "min": 111000,
          "max": 444000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 13330,
          "max": 27780
        },
        "pop_pct": 0.087,
        "pop_py": 126609
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 133000,
          "max": 533000
        },
        "debt": {
          "min": 33000,
          "max": 133000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 3110,
          "max": 5000
        },
        "pop_pct": 0.311,
        "pop_py": 452589
      },
      "Frequent Travelers": {
        "assets": {
          "min": 222000,
          "max": 889000
        },
        "debt": {
          "min": 89000,
          "max": 356000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6670,
          "max": 11110
        },
        "pop_pct": 0.19699999999999998,
        "pop_py": 286688
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 44000,
          "max": 178000
        },
        "debt": {
          "min": 28000,
          "max": 111000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2780,
          "max": 4670
        },
        "pop_pct": 0.142,
        "pop_py": 206648
      },
      "Small Business Owners": {
        "assets": {
          "min": 278000,
          "max": 1111000
        },
        "debt": {
          "min": 167000,
          "max": 667000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 6110,
          "max": 10000
        },
        "pop_pct": 0.157,
        "pop_py": 228478
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 33000,
          "max": 133000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 3110,
          "max": 5330
        },
        "pop_pct": 0.249,
        "pop_py": 362362
      },
      "Families with Children": {
        "assets": {
          "min": 167000,
          "max": 667000
        },
        "debt": {
          "min": 111000,
          "max": 444000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5560,
          "max": 9440
        },
        "pop_pct": 0.294,
        "pop_py": 427850
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 333000,
          "max": 1333000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3560,
          "max": 6110
        },
        "pop_pct": 0.155,
        "pop_py": 225567
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 444000,
          "max": 1778000
        },
        "debt": {
          "min": 133000,
          "max": 533000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 11110,
          "max": 22220
        },
        "pop_pct": 0.094,
        "pop_py": 136795
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 22000,
          "max": 89000
        },
        "debt": {
          "min": 17000,
          "max": 67000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2220,
          "max": 3890
        },
        "pop_pct": 0.20800000000000002,
        "pop_py": 302696
      },
      "Digital Natives": {
        "assets": {
          "min": 39000,
          "max": 156000
        },
        "debt": {
          "min": 20000,
          "max": 80000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3330,
          "max": 5560
        },
        "pop_pct": 0.313,
        "pop_py": 455500
      },
      "Renters": {
        "assets": {
          "min": 28000,
          "max": 111000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3560,
          "max": 6110
        },
        "pop_pct": 0.354,
        "pop_py": 515166
      },
      "Students 18+ Age": {
        "assets": {
          "min": 6000,
          "max": 22000
        },
        "debt": {
          "min": 11000,
          "max": 44000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1330,
          "max": 2440
        },
        "pop_pct": 0.18,
        "pop_py": 261949
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 44000
        },
        "debt": {
          "min": 44000,
          "max": 178000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2440,
          "max": 4220
        },
        "pop_pct": 0.166,
        "pop_py": 241575
      },
      "At-Risk Customers": {
        "assets": {
          "min": 17000,
          "max": 67000
        },
        "debt": {
          "min": 39000,
          "max": 156000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2670,
          "max": 4440
        },
        "pop_pct": 0.165,
        "pop_py": 240120
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 156000,
          "max": 622000
        },
        "debt": {
          "min": 28000,
          "max": 111000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2890,
          "max": 4670
        },
        "pop_pct": 0.312,
        "pop_py": 454045
      },
      "Frequent Traveler": {
        "assets": {
          "min": 222000,
          "max": 889000
        },
        "debt": {
          "min": 89000,
          "max": 356000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6670,
          "max": 11110
        },
        "pop_pct": 0.188,
        "pop_py": 273591
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 44000,
          "max": 178000
        },
        "debt": {
          "min": 28000,
          "max": 111000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2780,
          "max": 4670
        },
        "pop_pct": 0.044000000000000004,
        "pop_py": 64032
      }
    }
  },
  {
    "state_name": "Idaho",
    "state_code": "ID",
    "population": 1839106,
    "cost_index_2020": 91.8,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 185000,
          "max": 740000
        },
        "debt": {
          "min": 92000,
          "max": 370000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4600,
          "max": 7400
        },
        "pop_pct": 0.611,
        "pop_py": 1123694
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 73000,
          "max": 294000
        },
        "debt": {
          "min": 55000,
          "max": 220000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3210,
          "max": 5320
        },
        "pop_pct": 0.303,
        "pop_py": 557249
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 459000,
          "max": 1836000
        },
        "debt": {
          "min": 92000,
          "max": 367000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11020,
          "max": 22950
        },
        "pop_pct": 0.008,
        "pop_py": 14713
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 110000,
          "max": 441000
        },
        "debt": {
          "min": 28000,
          "max": 110000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4130
        },
        "pop_pct": 0.289,
        "pop_py": 531502
      },
      "Frequent Travelers": {
        "assets": {
          "min": 184000,
          "max": 734000
        },
        "debt": {
          "min": 73000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9180
        },
        "pop_pct": 0.10800000000000001,
        "pop_py": 198623
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3860
        },
        "pop_pct": 0.272,
        "pop_py": 500237
      },
      "Small Business Owners": {
        "assets": {
          "min": 229000,
          "max": 918000
        },
        "debt": {
          "min": 138000,
          "max": 551000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5050,
          "max": 8260
        },
        "pop_pct": 0.096,
        "pop_py": 176554
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 110000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4410
        },
        "pop_pct": 0.124,
        "pop_py": 228049
      },
      "Families with Children": {
        "assets": {
          "min": 138000,
          "max": 551000
        },
        "debt": {
          "min": 92000,
          "max": 367000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4590,
          "max": 7800
        },
        "pop_pct": 0.292,
        "pop_py": 537019
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 275000,
          "max": 1102000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.192,
        "pop_py": 353108
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 367000,
          "max": 1469000
        },
        "debt": {
          "min": 110000,
          "max": 441000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9180,
          "max": 18360
        },
        "pop_pct": 0.113,
        "pop_py": 207819
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 73000
        },
        "debt": {
          "min": 14000,
          "max": 55000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1840,
          "max": 3210
        },
        "pop_pct": 0.26,
        "pop_py": 478168
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 129000
        },
        "debt": {
          "min": 17000,
          "max": 66000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2750,
          "max": 4590
        },
        "pop_pct": 0.306,
        "pop_py": 562766
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 92000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.28600000000000003,
        "pop_py": 525984
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 37000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1100,
          "max": 2020
        },
        "pop_pct": 0.122,
        "pop_py": 224371
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 37000
        },
        "debt": {
          "min": 37000,
          "max": 147000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2020,
          "max": 3490
        },
        "pop_pct": 0.268,
        "pop_py": 492880
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 55000
        },
        "debt": {
          "min": 32000,
          "max": 129000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2200,
          "max": 3670
        },
        "pop_pct": 0.22,
        "pop_py": 404603
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 129000,
          "max": 514000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2390,
          "max": 3860
        },
        "pop_pct": 0.273,
        "pop_py": 502076
      },
      "Frequent Traveler": {
        "assets": {
          "min": 184000,
          "max": 734000
        },
        "debt": {
          "min": 73000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9180
        },
        "pop_pct": 0.049,
        "pop_py": 90116
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3860
        },
        "pop_pct": 0.03,
        "pop_py": 55173
      }
    }
  },
  {
    "state_name": "Illinois",
    "state_code": "IL",
    "population": 12812508,
    "cost_index_2020": 101.2,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 204000,
          "max": 816000
        },
        "debt": {
          "min": 104000,
          "max": 416000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 700,
          "max": 770
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5080,
          "max": 8160
        },
        "pop_pct": 0.5770000000000001,
        "pop_py": 7392817
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 81000,
          "max": 324000
        },
        "debt": {
          "min": 61000,
          "max": 243000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3540,
          "max": 5870
        },
        "pop_pct": 0.312,
        "pop_py": 3997502
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 506000,
          "max": 2024000
        },
        "debt": {
          "min": 101000,
          "max": 405000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12140,
          "max": 25300
        },
        "pop_pct": 0.036000000000000004,
        "pop_py": 461250
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 121000,
          "max": 486000
        },
        "debt": {
          "min": 30000,
          "max": 121000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2830,
          "max": 4550
        },
        "pop_pct": 0.245,
        "pop_py": 3139064
      },
      "Frequent Travelers": {
        "assets": {
          "min": 202000,
          "max": 810000
        },
        "debt": {
          "min": 81000,
          "max": 324000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6070,
          "max": 10120
        },
        "pop_pct": 0.18600000000000003,
        "pop_py": 2383126
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 40000,
          "max": 162000
        },
        "debt": {
          "min": 25000,
          "max": 101000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2530,
          "max": 4250
        },
        "pop_pct": 0.171,
        "pop_py": 2190939
      },
      "Small Business Owners": {
        "assets": {
          "min": 253000,
          "max": 1012000
        },
        "debt": {
          "min": 152000,
          "max": 607000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5570,
          "max": 9110
        },
        "pop_pct": 0.157,
        "pop_py": 2011564
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 30000,
          "max": 121000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2830,
          "max": 4860
        },
        "pop_pct": 0.20800000000000002,
        "pop_py": 2665002
      },
      "Families with Children": {
        "assets": {
          "min": 152000,
          "max": 607000
        },
        "debt": {
          "min": 101000,
          "max": 405000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5060,
          "max": 8600
        },
        "pop_pct": 0.33899999999999997,
        "pop_py": 4343440
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 304000,
          "max": 1214000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3240,
          "max": 5570
        },
        "pop_pct": 0.185,
        "pop_py": 2370314
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 405000,
          "max": 1619000
        },
        "debt": {
          "min": 121000,
          "max": 486000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10120,
          "max": 20240
        },
        "pop_pct": 0.06,
        "pop_py": 768750
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 20000,
          "max": 81000
        },
        "debt": {
          "min": 15000,
          "max": 61000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2020,
          "max": 3540
        },
        "pop_pct": 0.168,
        "pop_py": 2152501
      },
      "Digital Natives": {
        "assets": {
          "min": 35000,
          "max": 142000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3040,
          "max": 5060
        },
        "pop_pct": 0.27399999999999997,
        "pop_py": 3510627
      },
      "Renters": {
        "assets": {
          "min": 25000,
          "max": 101000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3240,
          "max": 5570
        },
        "pop_pct": 0.309,
        "pop_py": 3959065
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 20000
        },
        "debt": {
          "min": 10000,
          "max": 40000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1210,
          "max": 2230
        },
        "pop_pct": 0.094,
        "pop_py": 1204376
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 40000
        },
        "debt": {
          "min": 40000,
          "max": 162000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2230,
          "max": 3850
        },
        "pop_pct": 0.239,
        "pop_py": 3062189
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 61000
        },
        "debt": {
          "min": 35000,
          "max": 142000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2430,
          "max": 4050
        },
        "pop_pct": 0.18100000000000002,
        "pop_py": 2319064
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 142000,
          "max": 567000
        },
        "debt": {
          "min": 25000,
          "max": 101000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2630,
          "max": 4250
        },
        "pop_pct": 0.298,
        "pop_py": 3818127
      },
      "Frequent Traveler": {
        "assets": {
          "min": 202000,
          "max": 810000
        },
        "debt": {
          "min": 81000,
          "max": 324000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6070,
          "max": 10120
        },
        "pop_pct": 0.13,
        "pop_py": 1665626
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 40000,
          "max": 162000
        },
        "debt": {
          "min": 25000,
          "max": 101000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2530,
          "max": 4250
        },
        "pop_pct": 0.1,
        "pop_py": 1281251
      }
    }
  },
  {
    "state_name": "Indiana",
    "state_code": "IN",
    "population": 6785528,
    "cost_index_2020": 91.9,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 186000,
          "max": 744000
        },
        "debt": {
          "min": 93000,
          "max": 372000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4650,
          "max": 7440
        },
        "pop_pct": 0.6890000000000001,
        "pop_py": 4675229
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 74000,
          "max": 294000
        },
        "debt": {
          "min": 55000,
          "max": 221000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3220,
          "max": 5330
        },
        "pop_pct": 0.23,
        "pop_py": 1560671
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 460000,
          "max": 1838000
        },
        "debt": {
          "min": 92000,
          "max": 368000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11030,
          "max": 22980
        },
        "pop_pct": 0.009000000000000001,
        "pop_py": 61070
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 110000,
          "max": 441000
        },
        "debt": {
          "min": 28000,
          "max": 110000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4140
        },
        "pop_pct": 0.302,
        "pop_py": 2049229
      },
      "Frequent Travelers": {
        "assets": {
          "min": 184000,
          "max": 735000
        },
        "debt": {
          "min": 74000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9190
        },
        "pop_pct": 0.18899999999999997,
        "pop_py": 1282465
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3860
        },
        "pop_pct": 0.19699999999999998,
        "pop_py": 1336749
      },
      "Small Business Owners": {
        "assets": {
          "min": 230000,
          "max": 919000
        },
        "debt": {
          "min": 138000,
          "max": 551000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5050,
          "max": 8270
        },
        "pop_pct": 0.11699999999999999,
        "pop_py": 793907
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 110000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4410
        },
        "pop_pct": 0.16,
        "pop_py": 1085684
      },
      "Families with Children": {
        "assets": {
          "min": 138000,
          "max": 551000
        },
        "debt": {
          "min": 92000,
          "max": 368000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4600,
          "max": 7810
        },
        "pop_pct": 0.39799999999999996,
        "pop_py": 2700640
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 276000,
          "max": 1103000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.153,
        "pop_py": 1038186
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 368000,
          "max": 1470000
        },
        "debt": {
          "min": 110000,
          "max": 441000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9190,
          "max": 18380
        },
        "pop_pct": 0.057999999999999996,
        "pop_py": 393561
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 74000
        },
        "debt": {
          "min": 14000,
          "max": 55000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1840,
          "max": 3220
        },
        "pop_pct": 0.245,
        "pop_py": 1662454
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 129000
        },
        "debt": {
          "min": 17000,
          "max": 66000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2760,
          "max": 4600
        },
        "pop_pct": 0.225,
        "pop_py": 1526744
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 92000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.337,
        "pop_py": 2286723
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 37000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1100,
          "max": 2020
        },
        "pop_pct": 0.133,
        "pop_py": 902475
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 37000
        },
        "debt": {
          "min": 37000,
          "max": 147000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2020,
          "max": 3490
        },
        "pop_pct": 0.24100000000000002,
        "pop_py": 1635312
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 55000
        },
        "debt": {
          "min": 32000,
          "max": 129000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2210,
          "max": 3680
        },
        "pop_pct": 0.233,
        "pop_py": 1581028
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 129000,
          "max": 515000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2390,
          "max": 3860
        },
        "pop_pct": 0.28,
        "pop_py": 1899948
      },
      "Frequent Traveler": {
        "assets": {
          "min": 184000,
          "max": 735000
        },
        "debt": {
          "min": 74000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9190
        },
        "pop_pct": 0.128,
        "pop_py": 868548
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3860
        },
        "pop_pct": 0.08,
        "pop_py": 542842
      }
    }
  },
  {
    "state_name": "Iowa",
    "state_code": "IA",
    "population": 3190369,
    "cost_index_2020": 88.4,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 174000,
          "max": 696000
        },
        "debt": {
          "min": 87000,
          "max": 348000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 680,
          "max": 750
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4350,
          "max": 6960
        },
        "pop_pct": 0.583,
        "pop_py": 1859985
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 71000,
          "max": 283000
        },
        "debt": {
          "min": 53000,
          "max": 212000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3090,
          "max": 5130
        },
        "pop_pct": 0.239,
        "pop_py": 762498
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 442000,
          "max": 1768000
        },
        "debt": {
          "min": 88000,
          "max": 354000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10610,
          "max": 22100
        },
        "pop_pct": 0.021,
        "pop_py": 66998
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 106000,
          "max": 424000
        },
        "debt": {
          "min": 27000,
          "max": 106000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2480,
          "max": 3980
        },
        "pop_pct": 0.298,
        "pop_py": 950730
      },
      "Frequent Travelers": {
        "assets": {
          "min": 177000,
          "max": 707000
        },
        "debt": {
          "min": 71000,
          "max": 283000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5300,
          "max": 8840
        },
        "pop_pct": 0.17,
        "pop_py": 542363
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 35000,
          "max": 141000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2210,
          "max": 3710
        },
        "pop_pct": 0.185,
        "pop_py": 590218
      },
      "Small Business Owners": {
        "assets": {
          "min": 221000,
          "max": 884000
        },
        "debt": {
          "min": 133000,
          "max": 530000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4860,
          "max": 7960
        },
        "pop_pct": 0.171,
        "pop_py": 545553
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 106000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2480,
          "max": 4240
        },
        "pop_pct": 0.14400000000000002,
        "pop_py": 459413
      },
      "Families with Children": {
        "assets": {
          "min": 133000,
          "max": 530000
        },
        "debt": {
          "min": 88000,
          "max": 354000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4420,
          "max": 7510
        },
        "pop_pct": 0.294,
        "pop_py": 937968
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 265000,
          "max": 1061000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2830,
          "max": 4860
        },
        "pop_pct": 0.168,
        "pop_py": 535982
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 354000,
          "max": 1414000
        },
        "debt": {
          "min": 106000,
          "max": 424000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8840,
          "max": 17680
        },
        "pop_pct": 0.01,
        "pop_py": 31904
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 71000
        },
        "debt": {
          "min": 13000,
          "max": 53000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1770,
          "max": 3090
        },
        "pop_pct": 0.18600000000000003,
        "pop_py": 593409
      },
      "Digital Natives": {
        "assets": {
          "min": 31000,
          "max": 124000
        },
        "debt": {
          "min": 16000,
          "max": 64000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2650,
          "max": 4420
        },
        "pop_pct": 0.203,
        "pop_py": 647645
      },
      "Renters": {
        "assets": {
          "min": 22000,
          "max": 88000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2830,
          "max": 4860
        },
        "pop_pct": 0.26899999999999996,
        "pop_py": 858209
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 35000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1060,
          "max": 1940
        },
        "pop_pct": 0.183,
        "pop_py": 583838
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 35000
        },
        "debt": {
          "min": 35000,
          "max": 141000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1940,
          "max": 3360
        },
        "pop_pct": 0.24,
        "pop_py": 765689
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 53000
        },
        "debt": {
          "min": 31000,
          "max": 124000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2120,
          "max": 3540
        },
        "pop_pct": 0.255,
        "pop_py": 813544
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 124000,
          "max": 495000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3710
        },
        "pop_pct": 0.332,
        "pop_py": 1059203
      },
      "Frequent Traveler": {
        "assets": {
          "min": 177000,
          "max": 707000
        },
        "debt": {
          "min": 71000,
          "max": 283000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5300,
          "max": 8840
        },
        "pop_pct": 0.095,
        "pop_py": 303085
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 35000,
          "max": 141000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2210,
          "max": 3710
        },
        "pop_pct": 0.141,
        "pop_py": 449842
      }
    }
  },
  {
    "state_name": "Kansas",
    "state_code": "KS",
    "population": 2937880,
    "cost_index_2020": 90.0,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 180000,
          "max": 720000
        },
        "debt": {
          "min": 90000,
          "max": 360000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 685,
          "max": 755
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4500,
          "max": 7200
        },
        "pop_pct": 0.601,
        "pop_py": 1765666
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 72000,
          "max": 288000
        },
        "debt": {
          "min": 54000,
          "max": 216000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3150,
          "max": 5220
        },
        "pop_pct": 0.244,
        "pop_py": 716843
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 450000,
          "max": 1800000
        },
        "debt": {
          "min": 90000,
          "max": 360000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10800,
          "max": 22500
        },
        "pop_pct": 0.022000000000000002,
        "pop_py": 64633
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 108000,
          "max": 432000
        },
        "debt": {
          "min": 27000,
          "max": 108000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2520,
          "max": 4050
        },
        "pop_pct": 0.337,
        "pop_py": 990066
      },
      "Frequent Travelers": {
        "assets": {
          "min": 180000,
          "max": 720000
        },
        "debt": {
          "min": 72000,
          "max": 288000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5400,
          "max": 9000
        },
        "pop_pct": 0.10300000000000001,
        "pop_py": 302602
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 36000,
          "max": 144000
        },
        "debt": {
          "min": 22000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2250,
          "max": 3780
        },
        "pop_pct": 0.17600000000000002,
        "pop_py": 517067
      },
      "Small Business Owners": {
        "assets": {
          "min": 225000,
          "max": 900000
        },
        "debt": {
          "min": 135000,
          "max": 540000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4950,
          "max": 8100
        },
        "pop_pct": 0.16,
        "pop_py": 470061
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 108000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2520,
          "max": 4320
        },
        "pop_pct": 0.153,
        "pop_py": 449496
      },
      "Families with Children": {
        "assets": {
          "min": 135000,
          "max": 540000
        },
        "debt": {
          "min": 90000,
          "max": 360000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4500,
          "max": 7650
        },
        "pop_pct": 0.276,
        "pop_py": 810855
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 270000,
          "max": 1080000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2880,
          "max": 4950
        },
        "pop_pct": 0.19,
        "pop_py": 558197
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 360000,
          "max": 1440000
        },
        "debt": {
          "min": 108000,
          "max": 432000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9000,
          "max": 18000
        },
        "pop_pct": 0.062,
        "pop_py": 182149
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 72000
        },
        "debt": {
          "min": 14000,
          "max": 54000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1800,
          "max": 3150
        },
        "pop_pct": 0.218,
        "pop_py": 640458
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 126000
        },
        "debt": {
          "min": 16000,
          "max": 65000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2700,
          "max": 4500
        },
        "pop_pct": 0.264,
        "pop_py": 775600
      },
      "Renters": {
        "assets": {
          "min": 22000,
          "max": 90000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2880,
          "max": 4950
        },
        "pop_pct": 0.273,
        "pop_py": 802041
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 36000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1080,
          "max": 1980
        },
        "pop_pct": 0.157,
        "pop_py": 461247
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 36000
        },
        "debt": {
          "min": 36000,
          "max": 144000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1980,
          "max": 3420
        },
        "pop_pct": 0.24100000000000002,
        "pop_py": 708029
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 54000
        },
        "debt": {
          "min": 32000,
          "max": 126000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2160,
          "max": 3600
        },
        "pop_pct": 0.23199999999999998,
        "pop_py": 681588
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 126000,
          "max": 504000
        },
        "debt": {
          "min": 22000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2340,
          "max": 3780
        },
        "pop_pct": 0.278,
        "pop_py": 816731
      },
      "Frequent Traveler": {
        "assets": {
          "min": 180000,
          "max": 720000
        },
        "debt": {
          "min": 72000,
          "max": 288000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5400,
          "max": 9000
        },
        "pop_pct": 0.10800000000000001,
        "pop_py": 317291
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 36000,
          "max": 144000
        },
        "debt": {
          "min": 22000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2250,
          "max": 3780
        },
        "pop_pct": 0.081,
        "pop_py": 237968
      }
    }
  },
  {
    "state_name": "Kentucky",
    "state_code": "KY",
    "population": 4505836,
    "cost_index_2020": 89.4,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 178000,
          "max": 712000
        },
        "debt": {
          "min": 89000,
          "max": 356000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 680,
          "max": 750
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4450,
          "max": 7120
        },
        "pop_pct": 0.731,
        "pop_py": 3293766
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 72000,
          "max": 286000
        },
        "debt": {
          "min": 54000,
          "max": 215000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3130,
          "max": 5190
        },
        "pop_pct": 0.24100000000000002,
        "pop_py": 1085906
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 447000,
          "max": 1788000
        },
        "debt": {
          "min": 89000,
          "max": 358000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10730,
          "max": 22350
        },
        "pop_pct": 0.032,
        "pop_py": 144187
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 107000,
          "max": 429000
        },
        "debt": {
          "min": 27000,
          "max": 107000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2500,
          "max": 4020
        },
        "pop_pct": 0.332,
        "pop_py": 1495938
      },
      "Frequent Travelers": {
        "assets": {
          "min": 179000,
          "max": 715000
        },
        "debt": {
          "min": 72000,
          "max": 286000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5360,
          "max": 8940
        },
        "pop_pct": 0.10400000000000001,
        "pop_py": 468607
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 36000,
          "max": 143000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2240,
          "max": 3750
        },
        "pop_pct": 0.087,
        "pop_py": 392008
      },
      "Small Business Owners": {
        "assets": {
          "min": 224000,
          "max": 894000
        },
        "debt": {
          "min": 134000,
          "max": 536000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4920,
          "max": 8050
        },
        "pop_pct": 0.14800000000000002,
        "pop_py": 666864
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 107000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2500,
          "max": 4290
        },
        "pop_pct": 0.099,
        "pop_py": 446078
      },
      "Families with Children": {
        "assets": {
          "min": 134000,
          "max": 536000
        },
        "debt": {
          "min": 89000,
          "max": 358000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4470,
          "max": 7600
        },
        "pop_pct": 0.371,
        "pop_py": 1671665
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 268000,
          "max": 1073000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2860,
          "max": 4920
        },
        "pop_pct": 0.22899999999999998,
        "pop_py": 1031836
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 358000,
          "max": 1430000
        },
        "debt": {
          "min": 107000,
          "max": 429000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8940,
          "max": 17880
        },
        "pop_pct": 0.057,
        "pop_py": 256833
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 72000
        },
        "debt": {
          "min": 13000,
          "max": 54000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1790,
          "max": 3130
        },
        "pop_pct": 0.233,
        "pop_py": 1049860
      },
      "Digital Natives": {
        "assets": {
          "min": 31000,
          "max": 125000
        },
        "debt": {
          "min": 16000,
          "max": 64000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2680,
          "max": 4470
        },
        "pop_pct": 0.215,
        "pop_py": 968755
      },
      "Renters": {
        "assets": {
          "min": 22000,
          "max": 89000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2860,
          "max": 4920
        },
        "pop_pct": 0.256,
        "pop_py": 1153494
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 36000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1070,
          "max": 1970
        },
        "pop_pct": 0.135,
        "pop_py": 608288
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 36000
        },
        "debt": {
          "min": 36000,
          "max": 143000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1970,
          "max": 3400
        },
        "pop_pct": 0.257,
        "pop_py": 1158000
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 54000
        },
        "debt": {
          "min": 31000,
          "max": 125000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2150,
          "max": 3580
        },
        "pop_pct": 0.256,
        "pop_py": 1153494
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 125000,
          "max": 501000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2320,
          "max": 3750
        },
        "pop_pct": 0.297,
        "pop_py": 1338233
      },
      "Frequent Traveler": {
        "assets": {
          "min": 179000,
          "max": 715000
        },
        "debt": {
          "min": 72000,
          "max": 286000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5360,
          "max": 8940
        },
        "pop_pct": 0.122,
        "pop_py": 549712
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 36000,
          "max": 143000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2240,
          "max": 3750
        },
        "pop_pct": 0.111,
        "pop_py": 500148
      }
    }
  },
  {
    "state_name": "Louisiana",
    "state_code": "LA",
    "population": 4657757,
    "cost_index_2020": 90.6,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 181000,
          "max": 724000
        },
        "debt": {
          "min": 90500,
          "max": 362000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 685,
          "max": 755
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4520,
          "max": 7240
        },
        "pop_pct": 0.618,
        "pop_py": 2878494
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 72000,
          "max": 290000
        },
        "debt": {
          "min": 54000,
          "max": 217000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3170,
          "max": 5250
        },
        "pop_pct": 0.222,
        "pop_py": 1034022
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 453000,
          "max": 1812000
        },
        "debt": {
          "min": 91000,
          "max": 362000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10870,
          "max": 22650
        },
        "pop_pct": 0.042,
        "pop_py": 195626
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 109000,
          "max": 435000
        },
        "debt": {
          "min": 27000,
          "max": 109000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2540,
          "max": 4080
        },
        "pop_pct": 0.34,
        "pop_py": 1583637
      },
      "Frequent Travelers": {
        "assets": {
          "min": 181000,
          "max": 725000
        },
        "debt": {
          "min": 72000,
          "max": 290000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5440,
          "max": 9060
        },
        "pop_pct": 0.19,
        "pop_py": 884974
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 36000,
          "max": 145000
        },
        "debt": {
          "min": 23000,
          "max": 91000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2260,
          "max": 3810
        },
        "pop_pct": 0.155,
        "pop_py": 721952
      },
      "Small Business Owners": {
        "assets": {
          "min": 226000,
          "max": 906000
        },
        "debt": {
          "min": 136000,
          "max": 544000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4980,
          "max": 8150
        },
        "pop_pct": 0.16699999999999998,
        "pop_py": 777845
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 109000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2540,
          "max": 4350
        },
        "pop_pct": 0.133,
        "pop_py": 619482
      },
      "Families with Children": {
        "assets": {
          "min": 136000,
          "max": 544000
        },
        "debt": {
          "min": 91000,
          "max": 362000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4530,
          "max": 7700
        },
        "pop_pct": 0.316,
        "pop_py": 1471851
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 272000,
          "max": 1087000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2900,
          "max": 4980
        },
        "pop_pct": 0.163,
        "pop_py": 759214
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 362000,
          "max": 1450000
        },
        "debt": {
          "min": 109000,
          "max": 435000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9060,
          "max": 18120
        },
        "pop_pct": 0.02,
        "pop_py": 93155
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 72000
        },
        "debt": {
          "min": 14000,
          "max": 54000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1810,
          "max": 3170
        },
        "pop_pct": 0.23399999999999999,
        "pop_py": 1089915
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 127000
        },
        "debt": {
          "min": 16000,
          "max": 65000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2720,
          "max": 4530
        },
        "pop_pct": 0.192,
        "pop_py": 894289
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 91000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2900,
          "max": 4980
        },
        "pop_pct": 0.265,
        "pop_py": 1234306
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 36000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1090,
          "max": 1990
        },
        "pop_pct": 0.215,
        "pop_py": 1001418
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 36000
        },
        "debt": {
          "min": 36000,
          "max": 145000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1990,
          "max": 3440
        },
        "pop_pct": 0.23,
        "pop_py": 1071284
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 54000
        },
        "debt": {
          "min": 32000,
          "max": 127000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2170,
          "max": 3620
        },
        "pop_pct": 0.19699999999999998,
        "pop_py": 917578
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 127000,
          "max": 507000
        },
        "debt": {
          "min": 23000,
          "max": 91000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2360,
          "max": 3810
        },
        "pop_pct": 0.32799999999999996,
        "pop_py": 1527744
      },
      "Frequent Traveler": {
        "assets": {
          "min": 181000,
          "max": 725000
        },
        "debt": {
          "min": 72000,
          "max": 290000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5440,
          "max": 9060
        },
        "pop_pct": 0.115,
        "pop_py": 535642
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 36000,
          "max": 145000
        },
        "debt": {
          "min": 23000,
          "max": 91000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2260,
          "max": 3810
        },
        "pop_pct": 0.18,
        "pop_py": 838396
      }
    }
  },
  {
    "state_name": "Maine",
    "state_code": "ME",
    "population": 1362359,
    "cost_index_2020": 100.7,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 202000,
          "max": 808000
        },
        "debt": {
          "min": 101000,
          "max": 404000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 700,
          "max": 770
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5050,
          "max": 8080
        },
        "pop_pct": 0.53,
        "pop_py": 722050
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 81000,
          "max": 322000
        },
        "debt": {
          "min": 60000,
          "max": 242000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3520,
          "max": 5840
        },
        "pop_pct": 0.20600000000000002,
        "pop_py": 280646
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 504000,
          "max": 2014000
        },
        "debt": {
          "min": 101000,
          "max": 403000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12080,
          "max": 25180
        },
        "pop_pct": 0.06,
        "pop_py": 81742
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 121000,
          "max": 483000
        },
        "debt": {
          "min": 30000,
          "max": 121000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2820,
          "max": 4530
        },
        "pop_pct": 0.312,
        "pop_py": 425056
      },
      "Frequent Travelers": {
        "assets": {
          "min": 201000,
          "max": 806000
        },
        "debt": {
          "min": 81000,
          "max": 322000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6040,
          "max": 10070
        },
        "pop_pct": 0.188,
        "pop_py": 256123
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 40000,
          "max": 161000
        },
        "debt": {
          "min": 25000,
          "max": 101000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2520,
          "max": 4230
        },
        "pop_pct": 0.247,
        "pop_py": 336503
      },
      "Small Business Owners": {
        "assets": {
          "min": 252000,
          "max": 1007000
        },
        "debt": {
          "min": 151000,
          "max": 604000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5540,
          "max": 9060
        },
        "pop_pct": 0.141,
        "pop_py": 192093
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 30000,
          "max": 121000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2820,
          "max": 4830
        },
        "pop_pct": 0.18100000000000002,
        "pop_py": 246587
      },
      "Families with Children": {
        "assets": {
          "min": 151000,
          "max": 604000
        },
        "debt": {
          "min": 101000,
          "max": 403000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5040,
          "max": 8560
        },
        "pop_pct": 0.326,
        "pop_py": 444129
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 302000,
          "max": 1208000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3220,
          "max": 5540
        },
        "pop_pct": 0.22699999999999998,
        "pop_py": 309255
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 403000,
          "max": 1611000
        },
        "debt": {
          "min": 121000,
          "max": 483000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10070,
          "max": 20140
        },
        "pop_pct": 0.055,
        "pop_py": 74930
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 20000,
          "max": 81000
        },
        "debt": {
          "min": 15000,
          "max": 60000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2010,
          "max": 3520
        },
        "pop_pct": 0.24,
        "pop_py": 326966
      },
      "Digital Natives": {
        "assets": {
          "min": 35000,
          "max": 141000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3020,
          "max": 5040
        },
        "pop_pct": 0.27699999999999997,
        "pop_py": 377373
      },
      "Renters": {
        "assets": {
          "min": 25000,
          "max": 101000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3220,
          "max": 5540
        },
        "pop_pct": 0.319,
        "pop_py": 434593
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 20000
        },
        "debt": {
          "min": 10000,
          "max": 40000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1210,
          "max": 2220
        },
        "pop_pct": 0.149,
        "pop_py": 202991
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 40000
        },
        "debt": {
          "min": 40000,
          "max": 161000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2220,
          "max": 3830
        },
        "pop_pct": 0.245,
        "pop_py": 333778
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 60000
        },
        "debt": {
          "min": 35000,
          "max": 141000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2420,
          "max": 4030
        },
        "pop_pct": 0.272,
        "pop_py": 370562
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 141000,
          "max": 564000
        },
        "debt": {
          "min": 25000,
          "max": 101000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2620,
          "max": 4230
        },
        "pop_pct": 0.35100000000000003,
        "pop_py": 478188
      },
      "Frequent Traveler": {
        "assets": {
          "min": 201000,
          "max": 806000
        },
        "debt": {
          "min": 81000,
          "max": 322000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6040,
          "max": 10070
        },
        "pop_pct": 0.087,
        "pop_py": 118525
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 40000,
          "max": 161000
        },
        "debt": {
          "min": 25000,
          "max": 101000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2520,
          "max": 4230
        },
        "pop_pct": 0.102,
        "pop_py": 138961
      }
    }
  },
  {
    "state_name": "Maryland",
    "state_code": "MD",
    "population": 6177224,
    "cost_index_2020": 106.4,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 222000,
          "max": 888000
        },
        "debt": {
          "min": 116000,
          "max": 464000
        },
        "debt_to_income_ratio": 0.31,
        "credit_score": {
          "min": 705,
          "max": 775
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5550,
          "max": 8880
        },
        "pop_pct": 0.552,
        "pop_py": 3409828
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 85000,
          "max": 340000
        },
        "debt": {
          "min": 64000,
          "max": 255000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3720,
          "max": 6170
        },
        "pop_pct": 0.251,
        "pop_py": 1550483
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 532000,
          "max": 2128000
        },
        "debt": {
          "min": 106000,
          "max": 426000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12770,
          "max": 26600
        },
        "pop_pct": 0.15,
        "pop_py": 926584
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 128000,
          "max": 511000
        },
        "debt": {
          "min": 32000,
          "max": 128000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2980,
          "max": 4790
        },
        "pop_pct": 0.285,
        "pop_py": 1760509
      },
      "Frequent Travelers": {
        "assets": {
          "min": 213000,
          "max": 851000
        },
        "debt": {
          "min": 85000,
          "max": 340000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6380,
          "max": 10640
        },
        "pop_pct": 0.168,
        "pop_py": 1037774
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 43000,
          "max": 170000
        },
        "debt": {
          "min": 27000,
          "max": 106000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4470
        },
        "pop_pct": 0.16,
        "pop_py": 988356
      },
      "Small Business Owners": {
        "assets": {
          "min": 266000,
          "max": 1064000
        },
        "debt": {
          "min": 160000,
          "max": 638000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5850,
          "max": 9580
        },
        "pop_pct": 0.193,
        "pop_py": 1192204
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 32000,
          "max": 128000
        },
        "debt": {
          "min": 21000,
          "max": 85000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2980,
          "max": 5110
        },
        "pop_pct": 0.192,
        "pop_py": 1186027
      },
      "Families with Children": {
        "assets": {
          "min": 160000,
          "max": 638000
        },
        "debt": {
          "min": 106000,
          "max": 426000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5320,
          "max": 9040
        },
        "pop_pct": 0.294,
        "pop_py": 1816104
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 319000,
          "max": 1277000
        },
        "debt": {
          "min": 21000,
          "max": 85000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3400,
          "max": 5850
        },
        "pop_pct": 0.16699999999999998,
        "pop_py": 1031596
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 426000,
          "max": 1702000
        },
        "debt": {
          "min": 128000,
          "max": 511000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10640,
          "max": 21280
        },
        "pop_pct": 0.086,
        "pop_py": 531241
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 21000,
          "max": 85000
        },
        "debt": {
          "min": 16000,
          "max": 64000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2130,
          "max": 3720
        },
        "pop_pct": 0.266,
        "pop_py": 1643142
      },
      "Digital Natives": {
        "assets": {
          "min": 37000,
          "max": 149000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3190,
          "max": 5320
        },
        "pop_pct": 0.268,
        "pop_py": 1655496
      },
      "Renters": {
        "assets": {
          "min": 27000,
          "max": 106000
        },
        "debt": {
          "min": 21000,
          "max": 85000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3400,
          "max": 5850
        },
        "pop_pct": 0.34700000000000003,
        "pop_py": 2143497
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 21000
        },
        "debt": {
          "min": 11000,
          "max": 43000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1280,
          "max": 2340
        },
        "pop_pct": 0.15,
        "pop_py": 926584
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 43000
        },
        "debt": {
          "min": 43000,
          "max": 170000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2340,
          "max": 4040
        },
        "pop_pct": 0.251,
        "pop_py": 1550483
      },
      "At-Risk Customers": {
        "assets": {
          "min": 16000,
          "max": 64000
        },
        "debt": {
          "min": 37000,
          "max": 149000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2550,
          "max": 4260
        },
        "pop_pct": 0.20199999999999999,
        "pop_py": 1247799
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 149000,
          "max": 596000
        },
        "debt": {
          "min": 27000,
          "max": 106000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2770,
          "max": 4470
        },
        "pop_pct": 0.20600000000000002,
        "pop_py": 1272508
      },
      "Frequent Traveler": {
        "assets": {
          "min": 213000,
          "max": 851000
        },
        "debt": {
          "min": 85000,
          "max": 340000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6380,
          "max": 10640
        },
        "pop_pct": 0.162,
        "pop_py": 1000710
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 43000,
          "max": 170000
        },
        "debt": {
          "min": 27000,
          "max": 106000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4470
        },
        "pop_pct": 0.113,
        "pop_py": 698026
      }
    }
  },
  {
    "state_name": "Massachusetts",
    "state_code": "MA",
    "population": 7029917,
    "cost_index_2020": 109.0,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 228000,
          "max": 912000
        },
        "debt": {
          "min": 120000,
          "max": 480000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5700,
          "max": 9120
        },
        "pop_pct": 0.563,
        "pop_py": 3957843
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 87000,
          "max": 349000
        },
        "debt": {
          "min": 65000,
          "max": 262000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3820,
          "max": 6320
        },
        "pop_pct": 0.319,
        "pop_py": 2242544
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 545000,
          "max": 2180000
        },
        "debt": {
          "min": 109000,
          "max": 436000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 13080,
          "max": 27250
        },
        "pop_pct": 0.09699999999999999,
        "pop_py": 681902
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 131000,
          "max": 523000
        },
        "debt": {
          "min": 33000,
          "max": 131000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 3050,
          "max": 4900
        },
        "pop_pct": 0.25,
        "pop_py": 1757479
      },
      "Frequent Travelers": {
        "assets": {
          "min": 218000,
          "max": 872000
        },
        "debt": {
          "min": 87000,
          "max": 349000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6540,
          "max": 10900
        },
        "pop_pct": 0.183,
        "pop_py": 1286475
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 44000,
          "max": 174000
        },
        "debt": {
          "min": 27000,
          "max": 109000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2720,
          "max": 4580
        },
        "pop_pct": 0.171,
        "pop_py": 1202116
      },
      "Small Business Owners": {
        "assets": {
          "min": 272000,
          "max": 1090000
        },
        "debt": {
          "min": 164000,
          "max": 654000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 6000,
          "max": 9810
        },
        "pop_pct": 0.17300000000000001,
        "pop_py": 1216176
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 33000,
          "max": 131000
        },
        "debt": {
          "min": 22000,
          "max": 87000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 3050,
          "max": 5230
        },
        "pop_pct": 0.174,
        "pop_py": 1223206
      },
      "Families with Children": {
        "assets": {
          "min": 164000,
          "max": 654000
        },
        "debt": {
          "min": 109000,
          "max": 436000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5450,
          "max": 9260
        },
        "pop_pct": 0.336,
        "pop_py": 2362052
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 327000,
          "max": 1308000
        },
        "debt": {
          "min": 22000,
          "max": 87000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3490,
          "max": 6000
        },
        "pop_pct": 0.179,
        "pop_py": 1258355
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 436000,
          "max": 1744000
        },
        "debt": {
          "min": 131000,
          "max": 523000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10900,
          "max": 21800
        },
        "pop_pct": 0.069,
        "pop_py": 485064
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 22000,
          "max": 87000
        },
        "debt": {
          "min": 16000,
          "max": 65000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2180,
          "max": 3820
        },
        "pop_pct": 0.247,
        "pop_py": 1736389
      },
      "Digital Natives": {
        "assets": {
          "min": 38000,
          "max": 153000
        },
        "debt": {
          "min": 20000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3270,
          "max": 5450
        },
        "pop_pct": 0.281,
        "pop_py": 1975407
      },
      "Renters": {
        "assets": {
          "min": 27000,
          "max": 109000
        },
        "debt": {
          "min": 22000,
          "max": 87000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3490,
          "max": 6000
        },
        "pop_pct": 0.424,
        "pop_py": 2980685
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 22000
        },
        "debt": {
          "min": 11000,
          "max": 44000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1310,
          "max": 2400
        },
        "pop_pct": 0.153,
        "pop_py": 1075577
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 44000
        },
        "debt": {
          "min": 44000,
          "max": 174000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2400,
          "max": 4140
        },
        "pop_pct": 0.23399999999999999,
        "pop_py": 1645001
      },
      "At-Risk Customers": {
        "assets": {
          "min": 16000,
          "max": 65000
        },
        "debt": {
          "min": 38000,
          "max": 153000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2620,
          "max": 4360
        },
        "pop_pct": 0.253,
        "pop_py": 1778569
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 153000,
          "max": 610000
        },
        "debt": {
          "min": 27000,
          "max": 109000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2830,
          "max": 4580
        },
        "pop_pct": 0.28,
        "pop_py": 1968377
      },
      "Frequent Traveler": {
        "assets": {
          "min": 218000,
          "max": 872000
        },
        "debt": {
          "min": 87000,
          "max": 349000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6540,
          "max": 10900
        },
        "pop_pct": 0.168,
        "pop_py": 1181026
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 44000,
          "max": 174000
        },
        "debt": {
          "min": 27000,
          "max": 109000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2720,
          "max": 4580
        },
        "pop_pct": 0.165,
        "pop_py": 1159936
      }
    }
  },
  {
    "state_name": "Michigan",
    "state_code": "MI",
    "population": 10077331,
    "cost_index_2020": 94.4,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 189000,
          "max": 756000
        },
        "debt": {
          "min": 94500,
          "max": 378000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4720,
          "max": 7560
        },
        "pop_pct": 0.5529999999999999,
        "pop_py": 5572764
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 76000,
          "max": 302000
        },
        "debt": {
          "min": 57000,
          "max": 227000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3300,
          "max": 5480
        },
        "pop_pct": 0.24100000000000002,
        "pop_py": 2428637
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 472000,
          "max": 1888000
        },
        "debt": {
          "min": 94000,
          "max": 378000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11330,
          "max": 23600
        },
        "pop_pct": 0.036000000000000004,
        "pop_py": 362784
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 113000,
          "max": 453000
        },
        "debt": {
          "min": 28000,
          "max": 113000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2640,
          "max": 4250
        },
        "pop_pct": 0.24,
        "pop_py": 2418559
      },
      "Frequent Travelers": {
        "assets": {
          "min": 189000,
          "max": 755000
        },
        "debt": {
          "min": 76000,
          "max": 302000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5660,
          "max": 9440
        },
        "pop_pct": 0.195,
        "pop_py": 1965080
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 38000,
          "max": 151000
        },
        "debt": {
          "min": 24000,
          "max": 94000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2360,
          "max": 3960
        },
        "pop_pct": 0.146,
        "pop_py": 1471290
      },
      "Small Business Owners": {
        "assets": {
          "min": 236000,
          "max": 944000
        },
        "debt": {
          "min": 142000,
          "max": 566000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5190,
          "max": 8500
        },
        "pop_pct": 0.08800000000000001,
        "pop_py": 886805
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 113000
        },
        "debt": {
          "min": 19000,
          "max": 76000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2640,
          "max": 4530
        },
        "pop_pct": 0.134,
        "pop_py": 1350362
      },
      "Families with Children": {
        "assets": {
          "min": 142000,
          "max": 566000
        },
        "debt": {
          "min": 94000,
          "max": 378000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4720,
          "max": 8020
        },
        "pop_pct": 0.32899999999999996,
        "pop_py": 3315442
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 283000,
          "max": 1133000
        },
        "debt": {
          "min": 19000,
          "max": 76000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3020,
          "max": 5190
        },
        "pop_pct": 0.239,
        "pop_py": 2408482
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 378000,
          "max": 1510000
        },
        "debt": {
          "min": 113000,
          "max": 453000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9440,
          "max": 18880
        },
        "pop_pct": 0.043,
        "pop_py": 433325
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 19000,
          "max": 76000
        },
        "debt": {
          "min": 14000,
          "max": 57000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1890,
          "max": 3300
        },
        "pop_pct": 0.315,
        "pop_py": 3174359
      },
      "Digital Natives": {
        "assets": {
          "min": 33000,
          "max": 132000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2830,
          "max": 4720
        },
        "pop_pct": 0.29600000000000004,
        "pop_py": 2982890
      },
      "Renters": {
        "assets": {
          "min": 24000,
          "max": 94000
        },
        "debt": {
          "min": 19000,
          "max": 76000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3020,
          "max": 5190
        },
        "pop_pct": 0.275,
        "pop_py": 2771266
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 19000
        },
        "debt": {
          "min": 9000,
          "max": 38000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1130,
          "max": 2080
        },
        "pop_pct": 0.177,
        "pop_py": 1783688
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 38000
        },
        "debt": {
          "min": 38000,
          "max": 151000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2080,
          "max": 3590
        },
        "pop_pct": 0.265,
        "pop_py": 2670493
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 57000
        },
        "debt": {
          "min": 33000,
          "max": 132000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2270,
          "max": 3780
        },
        "pop_pct": 0.27,
        "pop_py": 2720879
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 132000,
          "max": 529000
        },
        "debt": {
          "min": 24000,
          "max": 94000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2450,
          "max": 3960
        },
        "pop_pct": 0.24600000000000002,
        "pop_py": 2479023
      },
      "Frequent Traveler": {
        "assets": {
          "min": 189000,
          "max": 755000
        },
        "debt": {
          "min": 76000,
          "max": 302000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5660,
          "max": 9440
        },
        "pop_pct": 0.159,
        "pop_py": 1602296
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 38000,
          "max": 151000
        },
        "debt": {
          "min": 24000,
          "max": 94000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2360,
          "max": 3960
        },
        "pop_pct": 0.141,
        "pop_py": 1420904
      }
    }
  },
  {
    "state_name": "Minnesota",
    "state_code": "MN",
    "population": 5706494,
    "cost_index_2020": 97.9,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 198000,
          "max": 792000
        },
        "debt": {
          "min": 99000,
          "max": 396000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 695,
          "max": 765
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4950,
          "max": 7920
        },
        "pop_pct": 0.489,
        "pop_py": 2790476
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 78000,
          "max": 313000
        },
        "debt": {
          "min": 59000,
          "max": 235000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3430,
          "max": 5680
        },
        "pop_pct": 0.26899999999999996,
        "pop_py": 1535047
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 490000,
          "max": 1958000
        },
        "debt": {
          "min": 98000,
          "max": 392000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11750,
          "max": 24480
        },
        "pop_pct": 0.025,
        "pop_py": 142662
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 117000,
          "max": 470000
        },
        "debt": {
          "min": 29000,
          "max": 117000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2740,
          "max": 4410
        },
        "pop_pct": 0.289,
        "pop_py": 1649177
      },
      "Frequent Travelers": {
        "assets": {
          "min": 196000,
          "max": 783000
        },
        "debt": {
          "min": 78000,
          "max": 313000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5870,
          "max": 9790
        },
        "pop_pct": 0.14400000000000002,
        "pop_py": 821735
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 39000,
          "max": 157000
        },
        "debt": {
          "min": 24000,
          "max": 98000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2450,
          "max": 4110
        },
        "pop_pct": 0.23800000000000002,
        "pop_py": 1358146
      },
      "Small Business Owners": {
        "assets": {
          "min": 245000,
          "max": 979000
        },
        "debt": {
          "min": 147000,
          "max": 587000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5380,
          "max": 8810
        },
        "pop_pct": 0.19699999999999998,
        "pop_py": 1124179
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 29000,
          "max": 117000
        },
        "debt": {
          "min": 20000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2740,
          "max": 4700
        },
        "pop_pct": 0.222,
        "pop_py": 1266842
      },
      "Families with Children": {
        "assets": {
          "min": 147000,
          "max": 587000
        },
        "debt": {
          "min": 98000,
          "max": 392000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4900,
          "max": 8320
        },
        "pop_pct": 0.34600000000000003,
        "pop_py": 1974447
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 294000,
          "max": 1175000
        },
        "debt": {
          "min": 20000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3130,
          "max": 5380
        },
        "pop_pct": 0.165,
        "pop_py": 941572
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 392000,
          "max": 1566000
        },
        "debt": {
          "min": 117000,
          "max": 470000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9790,
          "max": 19580
        },
        "pop_pct": 0.081,
        "pop_py": 462226
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 20000,
          "max": 78000
        },
        "debt": {
          "min": 15000,
          "max": 59000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1960,
          "max": 3430
        },
        "pop_pct": 0.315,
        "pop_py": 1797546
      },
      "Digital Natives": {
        "assets": {
          "min": 34000,
          "max": 137000
        },
        "debt": {
          "min": 18000,
          "max": 70000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2940,
          "max": 4900
        },
        "pop_pct": 0.245,
        "pop_py": 1398091
      },
      "Renters": {
        "assets": {
          "min": 24000,
          "max": 98000
        },
        "debt": {
          "min": 20000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3130,
          "max": 5380
        },
        "pop_pct": 0.25,
        "pop_py": 1426624
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 20000
        },
        "debt": {
          "min": 10000,
          "max": 39000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1170,
          "max": 2150
        },
        "pop_pct": 0.17,
        "pop_py": 970104
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 39000
        },
        "debt": {
          "min": 39000,
          "max": 157000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2150,
          "max": 3720
        },
        "pop_pct": 0.254,
        "pop_py": 1449449
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 59000
        },
        "debt": {
          "min": 34000,
          "max": 137000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2350,
          "max": 3920
        },
        "pop_pct": 0.183,
        "pop_py": 1044288
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 137000,
          "max": 548000
        },
        "debt": {
          "min": 24000,
          "max": 98000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2550,
          "max": 4110
        },
        "pop_pct": 0.321,
        "pop_py": 1831785
      },
      "Frequent Traveler": {
        "assets": {
          "min": 196000,
          "max": 783000
        },
        "debt": {
          "min": 78000,
          "max": 313000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5870,
          "max": 9790
        },
        "pop_pct": 0.064,
        "pop_py": 365216
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 39000,
          "max": 157000
        },
        "debt": {
          "min": 24000,
          "max": 98000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2450,
          "max": 4110
        },
        "pop_pct": 0.086,
        "pop_py": 490758
      }
    }
  },
  {
    "state_name": "Mississippi",
    "state_code": "MS",
    "population": 2961279,
    "cost_index_2020": 85.6,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 165000,
          "max": 660000
        },
        "debt": {
          "min": 82000,
          "max": 330000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 675,
          "max": 745
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4200,
          "max": 6600
        },
        "pop_pct": 0.662,
        "pop_py": 1960367
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 68000,
          "max": 274000
        },
        "debt": {
          "min": 51000,
          "max": 205000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3000,
          "max": 4960
        },
        "pop_pct": 0.248,
        "pop_py": 734397
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 428000,
          "max": 1712000
        },
        "debt": {
          "min": 86000,
          "max": 342000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10270,
          "max": 21400
        },
        "pop_pct": 0.008,
        "pop_py": 23690
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 103000,
          "max": 411000
        },
        "debt": {
          "min": 26000,
          "max": 103000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2400,
          "max": 3850
        },
        "pop_pct": 0.28800000000000003,
        "pop_py": 852848
      },
      "Frequent Travelers": {
        "assets": {
          "min": 171000,
          "max": 685000
        },
        "debt": {
          "min": 68000,
          "max": 274000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5140,
          "max": 8560
        },
        "pop_pct": 0.131,
        "pop_py": 387928
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 34000,
          "max": 137000
        },
        "debt": {
          "min": 21000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2140,
          "max": 3600
        },
        "pop_pct": 0.147,
        "pop_py": 435308
      },
      "Small Business Owners": {
        "assets": {
          "min": 214000,
          "max": 856000
        },
        "debt": {
          "min": 128000,
          "max": 514000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4710,
          "max": 7700
        },
        "pop_pct": 0.149,
        "pop_py": 441231
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 26000,
          "max": 103000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2400,
          "max": 4110
        },
        "pop_pct": 0.149,
        "pop_py": 441231
      },
      "Families with Children": {
        "assets": {
          "min": 128000,
          "max": 514000
        },
        "debt": {
          "min": 86000,
          "max": 342000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4280,
          "max": 7280
        },
        "pop_pct": 0.317,
        "pop_py": 938725
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 257000,
          "max": 1027000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2740,
          "max": 4710
        },
        "pop_pct": 0.23,
        "pop_py": 681094
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 342000,
          "max": 1370000
        },
        "debt": {
          "min": 103000,
          "max": 411000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8560,
          "max": 17120
        },
        "pop_pct": 0.016,
        "pop_py": 47380
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 17000,
          "max": 68000
        },
        "debt": {
          "min": 13000,
          "max": 51000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1710,
          "max": 3000
        },
        "pop_pct": 0.29600000000000004,
        "pop_py": 876539
      },
      "Digital Natives": {
        "assets": {
          "min": 30000,
          "max": 120000
        },
        "debt": {
          "min": 15000,
          "max": 62000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4280
        },
        "pop_pct": 0.254,
        "pop_py": 752165
      },
      "Renters": {
        "assets": {
          "min": 21000,
          "max": 86000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2740,
          "max": 4710
        },
        "pop_pct": 0.272,
        "pop_py": 805468
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 17000
        },
        "debt": {
          "min": 9000,
          "max": 34000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1030,
          "max": 1880
        },
        "pop_pct": 0.12,
        "pop_py": 355353
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 34000
        },
        "debt": {
          "min": 34000,
          "max": 137000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1880,
          "max": 3250
        },
        "pop_pct": 0.309,
        "pop_py": 915035
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 51000
        },
        "debt": {
          "min": 30000,
          "max": 120000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2050,
          "max": 3420
        },
        "pop_pct": 0.228,
        "pop_py": 675172
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 120000,
          "max": 479000
        },
        "debt": {
          "min": 21000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2230,
          "max": 3600
        },
        "pop_pct": 0.272,
        "pop_py": 805468
      },
      "Frequent Traveler": {
        "assets": {
          "min": 171000,
          "max": 685000
        },
        "debt": {
          "min": 68000,
          "max": 274000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5140,
          "max": 8560
        },
        "pop_pct": 0.15,
        "pop_py": 444192
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 34000,
          "max": 137000
        },
        "debt": {
          "min": 21000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2140,
          "max": 3600
        },
        "pop_pct": 0.14,
        "pop_py": 414579
      }
    }
  },
  {
    "state_name": "Missouri",
    "state_code": "MO",
    "population": 6154913,
    "cost_index_2020": 92.2,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 187000,
          "max": 748000
        },
        "debt": {
          "min": 93500,
          "max": 374000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4680,
          "max": 7480
        },
        "pop_pct": 0.602,
        "pop_py": 3705258
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 74000,
          "max": 295000
        },
        "debt": {
          "min": 55000,
          "max": 221000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3230,
          "max": 5350
        },
        "pop_pct": 0.313,
        "pop_py": 1926488
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 461000,
          "max": 1844000
        },
        "debt": {
          "min": 92000,
          "max": 369000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11060,
          "max": 23050
        },
        "pop_pct": 0.008,
        "pop_py": 49239
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 111000,
          "max": 443000
        },
        "debt": {
          "min": 28000,
          "max": 111000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2580,
          "max": 4150
        },
        "pop_pct": 0.33299999999999996,
        "pop_py": 2049586
      },
      "Frequent Travelers": {
        "assets": {
          "min": 184000,
          "max": 738000
        },
        "debt": {
          "min": 74000,
          "max": 295000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5530,
          "max": 9220
        },
        "pop_pct": 0.182,
        "pop_py": 1120194
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 37000,
          "max": 148000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3870
        },
        "pop_pct": 0.185,
        "pop_py": 1138659
      },
      "Small Business Owners": {
        "assets": {
          "min": 230000,
          "max": 922000
        },
        "debt": {
          "min": 138000,
          "max": 553000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5070,
          "max": 8300
        },
        "pop_pct": 0.156,
        "pop_py": 960166
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 111000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2580,
          "max": 4430
        },
        "pop_pct": 0.18100000000000002,
        "pop_py": 1114039
      },
      "Families with Children": {
        "assets": {
          "min": 138000,
          "max": 553000
        },
        "debt": {
          "min": 92000,
          "max": 369000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4610,
          "max": 7840
        },
        "pop_pct": 0.324,
        "pop_py": 1994192
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 277000,
          "max": 1106000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2950,
          "max": 5070
        },
        "pop_pct": 0.16699999999999998,
        "pop_py": 1027870
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 369000,
          "max": 1475000
        },
        "debt": {
          "min": 111000,
          "max": 443000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9220,
          "max": 18440
        },
        "pop_pct": 0.055,
        "pop_py": 338520
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 74000
        },
        "debt": {
          "min": 14000,
          "max": 55000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1840,
          "max": 3230
        },
        "pop_pct": 0.258,
        "pop_py": 1587968
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 129000
        },
        "debt": {
          "min": 17000,
          "max": 66000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2770,
          "max": 4610
        },
        "pop_pct": 0.2,
        "pop_py": 1230983
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 92000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2950,
          "max": 5070
        },
        "pop_pct": 0.276,
        "pop_py": 1698756
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 37000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1110,
          "max": 2030
        },
        "pop_pct": 0.14400000000000002,
        "pop_py": 886307
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 37000
        },
        "debt": {
          "min": 37000,
          "max": 148000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2030,
          "max": 3500
        },
        "pop_pct": 0.23,
        "pop_py": 1415630
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 55000
        },
        "debt": {
          "min": 32000,
          "max": 129000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2210,
          "max": 3690
        },
        "pop_pct": 0.243,
        "pop_py": 1495644
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 129000,
          "max": 516000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2400,
          "max": 3870
        },
        "pop_pct": 0.315,
        "pop_py": 1938798
      },
      "Frequent Traveler": {
        "assets": {
          "min": 184000,
          "max": 738000
        },
        "debt": {
          "min": 74000,
          "max": 295000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5530,
          "max": 9220
        },
        "pop_pct": 0.168,
        "pop_py": 1034025
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 37000,
          "max": 148000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3870
        },
        "pop_pct": 0.16399999999999998,
        "pop_py": 1009406
      }
    }
  },
  {
    "state_name": "Montana",
    "state_code": "MT",
    "population": 1084225,
    "cost_index_2020": 90.2,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 180500,
          "max": 722000
        },
        "debt": {
          "min": 90250,
          "max": 361000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 685,
          "max": 755
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4510,
          "max": 7220
        },
        "pop_pct": 0.7170000000000001,
        "pop_py": 777389
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 72000,
          "max": 289000
        },
        "debt": {
          "min": 54000,
          "max": 216000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3160,
          "max": 5230
        },
        "pop_pct": 0.213,
        "pop_py": 230940
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 451000,
          "max": 1804000
        },
        "debt": {
          "min": 90000,
          "max": 361000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10820,
          "max": 22550
        },
        "pop_pct": 0.008,
        "pop_py": 8674
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 108000,
          "max": 433000
        },
        "debt": {
          "min": 27000,
          "max": 108000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2530,
          "max": 4060
        },
        "pop_pct": 0.271,
        "pop_py": 293825
      },
      "Frequent Travelers": {
        "assets": {
          "min": 180000,
          "max": 722000
        },
        "debt": {
          "min": 72000,
          "max": 289000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5410,
          "max": 9020
        },
        "pop_pct": 0.17300000000000001,
        "pop_py": 187571
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 36000,
          "max": 144000
        },
        "debt": {
          "min": 23000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2260,
          "max": 3790
        },
        "pop_pct": 0.159,
        "pop_py": 172392
      },
      "Small Business Owners": {
        "assets": {
          "min": 226000,
          "max": 902000
        },
        "debt": {
          "min": 135000,
          "max": 541000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4960,
          "max": 8120
        },
        "pop_pct": 0.13699999999999998,
        "pop_py": 148539
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 108000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2530,
          "max": 4330
        },
        "pop_pct": 0.127,
        "pop_py": 137697
      },
      "Families with Children": {
        "assets": {
          "min": 135000,
          "max": 541000
        },
        "debt": {
          "min": 90000,
          "max": 361000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4510,
          "max": 7670
        },
        "pop_pct": 0.298,
        "pop_py": 323099
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 271000,
          "max": 1082000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2890,
          "max": 4960
        },
        "pop_pct": 0.27899999999999997,
        "pop_py": 302499
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 361000,
          "max": 1443000
        },
        "debt": {
          "min": 108000,
          "max": 433000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9020,
          "max": 18040
        },
        "pop_pct": 0.012,
        "pop_py": 13011
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 72000
        },
        "debt": {
          "min": 14000,
          "max": 54000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1800,
          "max": 3160
        },
        "pop_pct": 0.28600000000000003,
        "pop_py": 310088
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 126000
        },
        "debt": {
          "min": 16000,
          "max": 65000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2710,
          "max": 4510
        },
        "pop_pct": 0.233,
        "pop_py": 252624
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 90000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2890,
          "max": 4960
        },
        "pop_pct": 0.305,
        "pop_py": 330689
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 36000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1080,
          "max": 1980
        },
        "pop_pct": 0.212,
        "pop_py": 229856
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 36000
        },
        "debt": {
          "min": 36000,
          "max": 144000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1980,
          "max": 3430
        },
        "pop_pct": 0.278,
        "pop_py": 301415
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 54000
        },
        "debt": {
          "min": 32000,
          "max": 126000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2160,
          "max": 3610
        },
        "pop_pct": 0.19,
        "pop_py": 206003
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 126000,
          "max": 505000
        },
        "debt": {
          "min": 23000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2350,
          "max": 3790
        },
        "pop_pct": 0.33799999999999997,
        "pop_py": 366468
      },
      "Frequent Traveler": {
        "assets": {
          "min": 180000,
          "max": 722000
        },
        "debt": {
          "min": 72000,
          "max": 289000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5410,
          "max": 9020
        },
        "pop_pct": 0.12,
        "pop_py": 130107
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 36000,
          "max": 144000
        },
        "debt": {
          "min": 23000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2260,
          "max": 3790
        },
        "pop_pct": 0.115,
        "pop_py": 124686
      }
    }
  },
  {
    "state_name": "Nebraska",
    "state_code": "NE",
    "population": 1961504,
    "cost_index_2020": 89.9,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 179500,
          "max": 718000
        },
        "debt": {
          "min": 89750,
          "max": 359000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 685,
          "max": 755
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4490,
          "max": 7180
        },
        "pop_pct": 0.642,
        "pop_py": 1259286
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 72000,
          "max": 288000
        },
        "debt": {
          "min": 54000,
          "max": 216000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3150,
          "max": 5210
        },
        "pop_pct": 0.259,
        "pop_py": 508030
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 450000,
          "max": 1798000
        },
        "debt": {
          "min": 90000,
          "max": 360000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10790,
          "max": 22480
        },
        "pop_pct": 0.066,
        "pop_py": 129459
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 108000,
          "max": 432000
        },
        "debt": {
          "min": 27000,
          "max": 108000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2520,
          "max": 4050
        },
        "pop_pct": 0.32799999999999996,
        "pop_py": 643373
      },
      "Frequent Travelers": {
        "assets": {
          "min": 180000,
          "max": 719000
        },
        "debt": {
          "min": 72000,
          "max": 288000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5390,
          "max": 8990
        },
        "pop_pct": 0.203,
        "pop_py": 398185
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 36000,
          "max": 144000
        },
        "debt": {
          "min": 22000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2250,
          "max": 3780
        },
        "pop_pct": 0.24,
        "pop_py": 470761
      },
      "Small Business Owners": {
        "assets": {
          "min": 225000,
          "max": 899000
        },
        "debt": {
          "min": 135000,
          "max": 539000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4940,
          "max": 8090
        },
        "pop_pct": 0.196,
        "pop_py": 384455
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 108000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2520,
          "max": 4320
        },
        "pop_pct": 0.132,
        "pop_py": 258919
      },
      "Families with Children": {
        "assets": {
          "min": 135000,
          "max": 539000
        },
        "debt": {
          "min": 90000,
          "max": 360000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4500,
          "max": 7640
        },
        "pop_pct": 0.36200000000000004,
        "pop_py": 710064
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 270000,
          "max": 1079000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2880,
          "max": 4940
        },
        "pop_pct": 0.141,
        "pop_py": 276572
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 360000,
          "max": 1438000
        },
        "debt": {
          "min": 108000,
          "max": 432000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8990,
          "max": 17980
        },
        "pop_pct": 0.043,
        "pop_py": 84345
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 72000
        },
        "debt": {
          "min": 13000,
          "max": 54000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1800,
          "max": 3150
        },
        "pop_pct": 0.17800000000000002,
        "pop_py": 349148
      },
      "Digital Natives": {
        "assets": {
          "min": 31000,
          "max": 126000
        },
        "debt": {
          "min": 16000,
          "max": 65000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2700,
          "max": 4500
        },
        "pop_pct": 0.245,
        "pop_py": 480568
      },
      "Renters": {
        "assets": {
          "min": 22000,
          "max": 90000
        },
        "debt": {
          "min": 18000,
          "max": 72000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2880,
          "max": 4940
        },
        "pop_pct": 0.204,
        "pop_py": 400147
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 36000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1080,
          "max": 1980
        },
        "pop_pct": 0.098,
        "pop_py": 192227
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 36000
        },
        "debt": {
          "min": 36000,
          "max": 144000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1980,
          "max": 3420
        },
        "pop_pct": 0.243,
        "pop_py": 476645
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 54000
        },
        "debt": {
          "min": 31000,
          "max": 126000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2160,
          "max": 3600
        },
        "pop_pct": 0.198,
        "pop_py": 388378
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 126000,
          "max": 503000
        },
        "debt": {
          "min": 22000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2340,
          "max": 3780
        },
        "pop_pct": 0.337,
        "pop_py": 661027
      },
      "Frequent Traveler": {
        "assets": {
          "min": 180000,
          "max": 719000
        },
        "debt": {
          "min": 72000,
          "max": 288000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5390,
          "max": 8990
        },
        "pop_pct": 0.10099999999999999,
        "pop_py": 198112
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 36000,
          "max": 144000
        },
        "debt": {
          "min": 22000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2250,
          "max": 3780
        },
        "pop_pct": 0.109,
        "pop_py": 213804
      }
    }
  },
  {
    "state_name": "Nevada",
    "state_code": "NV",
    "population": 3104614,
    "cost_index_2020": 96.3,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 195000,
          "max": 780000
        },
        "debt": {
          "min": 97500,
          "max": 390000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 695,
          "max": 765
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4875,
          "max": 7800
        },
        "pop_pct": 0.618,
        "pop_py": 1918651
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 77000,
          "max": 308000
        },
        "debt": {
          "min": 58000,
          "max": 231000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3370,
          "max": 5590
        },
        "pop_pct": 0.261,
        "pop_py": 810304
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 482000,
          "max": 1926000
        },
        "debt": {
          "min": 96000,
          "max": 385000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11560,
          "max": 24080
        },
        "pop_pct": 0.066,
        "pop_py": 204905
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 116000,
          "max": 462000
        },
        "debt": {
          "min": 29000,
          "max": 116000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2700,
          "max": 4330
        },
        "pop_pct": 0.326,
        "pop_py": 1012104
      },
      "Frequent Travelers": {
        "assets": {
          "min": 193000,
          "max": 770000
        },
        "debt": {
          "min": 77000,
          "max": 308000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5780,
          "max": 9630
        },
        "pop_pct": 0.19,
        "pop_py": 589877
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 39000,
          "max": 154000
        },
        "debt": {
          "min": 24000,
          "max": 96000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2410,
          "max": 4040
        },
        "pop_pct": 0.243,
        "pop_py": 754421
      },
      "Small Business Owners": {
        "assets": {
          "min": 241000,
          "max": 963000
        },
        "debt": {
          "min": 144000,
          "max": 578000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5300,
          "max": 8670
        },
        "pop_pct": 0.146,
        "pop_py": 453274
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 29000,
          "max": 116000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2700,
          "max": 4620
        },
        "pop_pct": 0.17800000000000002,
        "pop_py": 552621
      },
      "Families with Children": {
        "assets": {
          "min": 144000,
          "max": 578000
        },
        "debt": {
          "min": 96000,
          "max": 385000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4820,
          "max": 8190
        },
        "pop_pct": 0.35200000000000004,
        "pop_py": 1092824
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 289000,
          "max": 1156000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3080,
          "max": 5300
        },
        "pop_pct": 0.162,
        "pop_py": 502947
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 385000,
          "max": 1541000
        },
        "debt": {
          "min": 116000,
          "max": 462000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9630,
          "max": 19260
        },
        "pop_pct": 0.071,
        "pop_py": 220428
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 19000,
          "max": 77000
        },
        "debt": {
          "min": 14000,
          "max": 58000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1930,
          "max": 3370
        },
        "pop_pct": 0.263,
        "pop_py": 816513
      },
      "Digital Natives": {
        "assets": {
          "min": 34000,
          "max": 135000
        },
        "debt": {
          "min": 17000,
          "max": 69000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2890,
          "max": 4820
        },
        "pop_pct": 0.272,
        "pop_py": 844455
      },
      "Renters": {
        "assets": {
          "min": 24000,
          "max": 96000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3080,
          "max": 5300
        },
        "pop_pct": 0.257,
        "pop_py": 797886
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 19000
        },
        "debt": {
          "min": 10000,
          "max": 39000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1160,
          "max": 2120
        },
        "pop_pct": 0.221,
        "pop_py": 686120
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 39000
        },
        "debt": {
          "min": 39000,
          "max": 154000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2120,
          "max": 3660
        },
        "pop_pct": 0.21100000000000002,
        "pop_py": 655074
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 58000
        },
        "debt": {
          "min": 34000,
          "max": 135000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2310,
          "max": 3850
        },
        "pop_pct": 0.20199999999999999,
        "pop_py": 627132
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 135000,
          "max": 539000
        },
        "debt": {
          "min": 24000,
          "max": 96000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2500,
          "max": 4040
        },
        "pop_pct": 0.258,
        "pop_py": 800990
      },
      "Frequent Traveler": {
        "assets": {
          "min": 193000,
          "max": 770000
        },
        "debt": {
          "min": 77000,
          "max": 308000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5780,
          "max": 9630
        },
        "pop_pct": 0.092,
        "pop_py": 285624
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 39000,
          "max": 154000
        },
        "debt": {
          "min": 24000,
          "max": 96000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2410,
          "max": 4040
        },
        "pop_pct": 0.138,
        "pop_py": 428437
      }
    }
  },
  {
    "state_name": "New Hampshire",
    "state_code": "NH",
    "population": 1377529,
    "cost_index_2020": 107.8,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 225000,
          "max": 900000
        },
        "debt": {
          "min": 118000,
          "max": 472000
        },
        "debt_to_income_ratio": 0.31,
        "credit_score": {
          "min": 705,
          "max": 775
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5620,
          "max": 9000
        },
        "pop_pct": 0.602,
        "pop_py": 829272
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 86000,
          "max": 345000
        },
        "debt": {
          "min": 65000,
          "max": 259000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3770,
          "max": 6250
        },
        "pop_pct": 0.26899999999999996,
        "pop_py": 370555
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 539000,
          "max": 2156000
        },
        "debt": {
          "min": 108000,
          "max": 431000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12940,
          "max": 26950
        },
        "pop_pct": 0.08,
        "pop_py": 110202
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 129000,
          "max": 517000
        },
        "debt": {
          "min": 32000,
          "max": 129000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 3020,
          "max": 4850
        },
        "pop_pct": 0.354,
        "pop_py": 487645
      },
      "Frequent Travelers": {
        "assets": {
          "min": 216000,
          "max": 862000
        },
        "debt": {
          "min": 86000,
          "max": 345000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6470,
          "max": 10780
        },
        "pop_pct": 0.217,
        "pop_py": 298924
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 43000,
          "max": 172000
        },
        "debt": {
          "min": 27000,
          "max": 108000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2700,
          "max": 4530
        },
        "pop_pct": 0.182,
        "pop_py": 250710
      },
      "Small Business Owners": {
        "assets": {
          "min": 270000,
          "max": 1078000
        },
        "debt": {
          "min": 162000,
          "max": 647000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5930,
          "max": 9700
        },
        "pop_pct": 0.21899999999999997,
        "pop_py": 301679
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 32000,
          "max": 129000
        },
        "debt": {
          "min": 22000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 3020,
          "max": 5170
        },
        "pop_pct": 0.20199999999999999,
        "pop_py": 278261
      },
      "Families with Children": {
        "assets": {
          "min": 162000,
          "max": 647000
        },
        "debt": {
          "min": 108000,
          "max": 431000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5390,
          "max": 9160
        },
        "pop_pct": 0.38,
        "pop_py": 523461
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 323000,
          "max": 1294000
        },
        "debt": {
          "min": 22000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3450,
          "max": 5930
        },
        "pop_pct": 0.231,
        "pop_py": 318209
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 431000,
          "max": 1725000
        },
        "debt": {
          "min": 129000,
          "max": 517000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10780,
          "max": 21560
        },
        "pop_pct": 0.115,
        "pop_py": 158416
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 22000,
          "max": 86000
        },
        "debt": {
          "min": 16000,
          "max": 65000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2160,
          "max": 3770
        },
        "pop_pct": 0.151,
        "pop_py": 208007
      },
      "Digital Natives": {
        "assets": {
          "min": 38000,
          "max": 151000
        },
        "debt": {
          "min": 19000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3230,
          "max": 5390
        },
        "pop_pct": 0.252,
        "pop_py": 347137
      },
      "Renters": {
        "assets": {
          "min": 27000,
          "max": 108000
        },
        "debt": {
          "min": 22000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3450,
          "max": 5930
        },
        "pop_pct": 0.402,
        "pop_py": 553767
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 22000
        },
        "debt": {
          "min": 11000,
          "max": 43000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1290,
          "max": 2370
        },
        "pop_pct": 0.21100000000000002,
        "pop_py": 290659
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 43000
        },
        "debt": {
          "min": 43000,
          "max": 172000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2370,
          "max": 4100
        },
        "pop_pct": 0.2,
        "pop_py": 275506
      },
      "At-Risk Customers": {
        "assets": {
          "min": 16000,
          "max": 65000
        },
        "debt": {
          "min": 38000,
          "max": 151000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2590,
          "max": 4310
        },
        "pop_pct": 0.20199999999999999,
        "pop_py": 278261
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 151000,
          "max": 604000
        },
        "debt": {
          "min": 27000,
          "max": 108000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2800,
          "max": 4530
        },
        "pop_pct": 0.293,
        "pop_py": 403616
      },
      "Frequent Traveler": {
        "assets": {
          "min": 216000,
          "max": 862000
        },
        "debt": {
          "min": 86000,
          "max": 345000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6470,
          "max": 10780
        },
        "pop_pct": 0.114,
        "pop_py": 157038
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 43000,
          "max": 172000
        },
        "debt": {
          "min": 27000,
          "max": 108000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2700,
          "max": 4530
        },
        "pop_pct": 0.076,
        "pop_py": 104692
      }
    }
  },
  {
    "state_name": "New Jersey",
    "state_code": "NJ",
    "population": 9288994,
    "cost_index_2020": 108.8,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 228000,
          "max": 912000
        },
        "debt": {
          "min": 120000,
          "max": 480000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5700,
          "max": 9120
        },
        "pop_pct": 0.586,
        "pop_py": 5443350
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 87000,
          "max": 348000
        },
        "debt": {
          "min": 65000,
          "max": 261000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3810,
          "max": 6310
        },
        "pop_pct": 0.309,
        "pop_py": 2870299
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 544000,
          "max": 2176000
        },
        "debt": {
          "min": 109000,
          "max": 435000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 13060,
          "max": 27200
        },
        "pop_pct": 0.135,
        "pop_py": 1254014
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 131000,
          "max": 522000
        },
        "debt": {
          "min": 33000,
          "max": 131000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 3050,
          "max": 4900
        },
        "pop_pct": 0.294,
        "pop_py": 2730964
      },
      "Frequent Travelers": {
        "assets": {
          "min": 218000,
          "max": 870000
        },
        "debt": {
          "min": 87000,
          "max": 348000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6530,
          "max": 10880
        },
        "pop_pct": 0.222,
        "pop_py": 2062157
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 44000,
          "max": 174000
        },
        "debt": {
          "min": 27000,
          "max": 109000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2720,
          "max": 4570
        },
        "pop_pct": 0.179,
        "pop_py": 1662730
      },
      "Small Business Owners": {
        "assets": {
          "min": 272000,
          "max": 1088000
        },
        "debt": {
          "min": 163000,
          "max": 653000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5980,
          "max": 9790
        },
        "pop_pct": 0.16399999999999998,
        "pop_py": 1523395
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 33000,
          "max": 131000
        },
        "debt": {
          "min": 22000,
          "max": 87000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 3050,
          "max": 5220
        },
        "pop_pct": 0.17300000000000001,
        "pop_py": 1606996
      },
      "Families with Children": {
        "assets": {
          "min": 163000,
          "max": 653000
        },
        "debt": {
          "min": 109000,
          "max": 435000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5440,
          "max": 9250
        },
        "pop_pct": 0.342,
        "pop_py": 3176836
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 326000,
          "max": 1306000
        },
        "debt": {
          "min": 22000,
          "max": 87000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3480,
          "max": 5980
        },
        "pop_pct": 0.204,
        "pop_py": 1894955
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 435000,
          "max": 1741000
        },
        "debt": {
          "min": 131000,
          "max": 522000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10880,
          "max": 21760
        },
        "pop_pct": 0.109,
        "pop_py": 1012500
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 22000,
          "max": 87000
        },
        "debt": {
          "min": 16000,
          "max": 65000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2180,
          "max": 3810
        },
        "pop_pct": 0.23399999999999999,
        "pop_py": 2173625
      },
      "Digital Natives": {
        "assets": {
          "min": 38000,
          "max": 152000
        },
        "debt": {
          "min": 20000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3260,
          "max": 5440
        },
        "pop_pct": 0.324,
        "pop_py": 3009634
      },
      "Renters": {
        "assets": {
          "min": 27000,
          "max": 109000
        },
        "debt": {
          "min": 22000,
          "max": 87000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3480,
          "max": 5980
        },
        "pop_pct": 0.382,
        "pop_py": 3548396
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 22000
        },
        "debt": {
          "min": 11000,
          "max": 44000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1310,
          "max": 2390
        },
        "pop_pct": 0.175,
        "pop_py": 1625574
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 44000
        },
        "debt": {
          "min": 44000,
          "max": 174000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2390,
          "max": 4130
        },
        "pop_pct": 0.20800000000000002,
        "pop_py": 1932111
      },
      "At-Risk Customers": {
        "assets": {
          "min": 16000,
          "max": 65000
        },
        "debt": {
          "min": 38000,
          "max": 152000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2610,
          "max": 4350
        },
        "pop_pct": 0.23199999999999998,
        "pop_py": 2155047
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 152000,
          "max": 609000
        },
        "debt": {
          "min": 27000,
          "max": 109000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2830,
          "max": 4570
        },
        "pop_pct": 0.258,
        "pop_py": 2396560
      },
      "Frequent Traveler": {
        "assets": {
          "min": 218000,
          "max": 870000
        },
        "debt": {
          "min": 87000,
          "max": 348000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6530,
          "max": 10880
        },
        "pop_pct": 0.124,
        "pop_py": 1151835
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 44000,
          "max": 174000
        },
        "debt": {
          "min": 27000,
          "max": 109000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2720,
          "max": 4570
        },
        "pop_pct": 0.121,
        "pop_py": 1123968
      }
    }
  },
  {
    "state_name": "New Mexico",
    "state_code": "NM",
    "population": 2117522,
    "cost_index_2020": 90.9,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 182000,
          "max": 728000
        },
        "debt": {
          "min": 91000,
          "max": 364000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 685,
          "max": 755
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4550,
          "max": 7280
        },
        "pop_pct": 0.5539999999999999,
        "pop_py": 1173107
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 73000,
          "max": 291000
        },
        "debt": {
          "min": 55000,
          "max": 218000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3180,
          "max": 5270
        },
        "pop_pct": 0.245,
        "pop_py": 518793
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 454000,
          "max": 1818000
        },
        "debt": {
          "min": 91000,
          "max": 364000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10910,
          "max": 22720
        },
        "pop_pct": 0.028999999999999998,
        "pop_py": 61408
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 109000,
          "max": 436000
        },
        "debt": {
          "min": 27000,
          "max": 109000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2550,
          "max": 4090
        },
        "pop_pct": 0.361,
        "pop_py": 764425
      },
      "Frequent Travelers": {
        "assets": {
          "min": 182000,
          "max": 727000
        },
        "debt": {
          "min": 73000,
          "max": 291000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5450,
          "max": 9090
        },
        "pop_pct": 0.154,
        "pop_py": 326098
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 36000,
          "max": 145000
        },
        "debt": {
          "min": 23000,
          "max": 91000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2270,
          "max": 3820
        },
        "pop_pct": 0.17,
        "pop_py": 359979
      },
      "Small Business Owners": {
        "assets": {
          "min": 227000,
          "max": 909000
        },
        "debt": {
          "min": 136000,
          "max": 545000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5000,
          "max": 8180
        },
        "pop_pct": 0.138,
        "pop_py": 292218
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 109000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2550,
          "max": 4360
        },
        "pop_pct": 0.162,
        "pop_py": 343039
      },
      "Families with Children": {
        "assets": {
          "min": 136000,
          "max": 545000
        },
        "debt": {
          "min": 91000,
          "max": 364000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4540,
          "max": 7730
        },
        "pop_pct": 0.294,
        "pop_py": 622551
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 273000,
          "max": 1091000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2910,
          "max": 5000
        },
        "pop_pct": 0.165,
        "pop_py": 349391
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 364000,
          "max": 1454000
        },
        "debt": {
          "min": 109000,
          "max": 436000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9090,
          "max": 18180
        },
        "pop_pct": 0.022000000000000002,
        "pop_py": 46585
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 73000
        },
        "debt": {
          "min": 14000,
          "max": 55000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1820,
          "max": 3180
        },
        "pop_pct": 0.242,
        "pop_py": 512440
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 127000
        },
        "debt": {
          "min": 16000,
          "max": 65000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2730,
          "max": 4540
        },
        "pop_pct": 0.192,
        "pop_py": 406564
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 91000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2910,
          "max": 5000
        },
        "pop_pct": 0.318,
        "pop_py": 673372
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 36000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1090,
          "max": 2000
        },
        "pop_pct": 0.22899999999999998,
        "pop_py": 484913
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 36000
        },
        "debt": {
          "min": 36000,
          "max": 145000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2000,
          "max": 3450
        },
        "pop_pct": 0.22399999999999998,
        "pop_py": 474325
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 55000
        },
        "debt": {
          "min": 32000,
          "max": 127000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2180,
          "max": 3640
        },
        "pop_pct": 0.233,
        "pop_py": 493383
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 127000,
          "max": 509000
        },
        "debt": {
          "min": 23000,
          "max": 91000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2360,
          "max": 3820
        },
        "pop_pct": 0.261,
        "pop_py": 552673
      },
      "Frequent Traveler": {
        "assets": {
          "min": 182000,
          "max": 727000
        },
        "debt": {
          "min": 73000,
          "max": 291000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5450,
          "max": 9090
        },
        "pop_pct": 0.071,
        "pop_py": 150344
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 36000,
          "max": 145000
        },
        "debt": {
          "min": 23000,
          "max": 91000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2270,
          "max": 3820
        },
        "pop_pct": 0.11900000000000001,
        "pop_py": 251985
      }
    }
  },
  {
    "state_name": "New York",
    "state_code": "NY",
    "population": 20201249,
    "cost_index_2020": 107.6,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 224000,
          "max": 896000
        },
        "debt": {
          "min": 117000,
          "max": 468000
        },
        "debt_to_income_ratio": 0.31,
        "credit_score": {
          "min": 705,
          "max": 775
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5600,
          "max": 8960
        },
        "pop_pct": 0.579,
        "pop_py": 11696523
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 86000,
          "max": 344000
        },
        "debt": {
          "min": 65000,
          "max": 258000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3770,
          "max": 6240
        },
        "pop_pct": 0.252,
        "pop_py": 5090715
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 538000,
          "max": 2152000
        },
        "debt": {
          "min": 108000,
          "max": 430000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12910,
          "max": 26900
        },
        "pop_pct": 0.092,
        "pop_py": 1858515
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 129000,
          "max": 516000
        },
        "debt": {
          "min": 32000,
          "max": 129000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 3010,
          "max": 4840
        },
        "pop_pct": 0.23600000000000002,
        "pop_py": 4767495
      },
      "Frequent Travelers": {
        "assets": {
          "min": 215000,
          "max": 861000
        },
        "debt": {
          "min": 86000,
          "max": 344000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6460,
          "max": 10760
        },
        "pop_pct": 0.183,
        "pop_py": 3696829
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 43000,
          "max": 172000
        },
        "debt": {
          "min": 27000,
          "max": 108000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2690,
          "max": 4520
        },
        "pop_pct": 0.166,
        "pop_py": 3353407
      },
      "Small Business Owners": {
        "assets": {
          "min": 269000,
          "max": 1076000
        },
        "debt": {
          "min": 161000,
          "max": 646000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5920,
          "max": 9680
        },
        "pop_pct": 0.138,
        "pop_py": 2787772
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 32000,
          "max": 129000
        },
        "debt": {
          "min": 22000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 3010,
          "max": 5160
        },
        "pop_pct": 0.28,
        "pop_py": 5656350
      },
      "Families with Children": {
        "assets": {
          "min": 161000,
          "max": 646000
        },
        "debt": {
          "min": 108000,
          "max": 430000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5380,
          "max": 9150
        },
        "pop_pct": 0.305,
        "pop_py": 6161381
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 323000,
          "max": 1291000
        },
        "debt": {
          "min": 22000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3440,
          "max": 5920
        },
        "pop_pct": 0.212,
        "pop_py": 4282665
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 430000,
          "max": 1722000
        },
        "debt": {
          "min": 129000,
          "max": 516000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10760,
          "max": 21520
        },
        "pop_pct": 0.134,
        "pop_py": 2706967
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 22000,
          "max": 86000
        },
        "debt": {
          "min": 16000,
          "max": 65000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2150,
          "max": 3770
        },
        "pop_pct": 0.271,
        "pop_py": 5474538
      },
      "Digital Natives": {
        "assets": {
          "min": 38000,
          "max": 151000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3230,
          "max": 5380
        },
        "pop_pct": 0.27,
        "pop_py": 5454337
      },
      "Renters": {
        "assets": {
          "min": 27000,
          "max": 108000
        },
        "debt": {
          "min": 22000,
          "max": 86000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3440,
          "max": 5920
        },
        "pop_pct": 0.335,
        "pop_py": 6767418
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 22000
        },
        "debt": {
          "min": 11000,
          "max": 43000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1290,
          "max": 2370
        },
        "pop_pct": 0.174,
        "pop_py": 3515017
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 43000
        },
        "debt": {
          "min": 43000,
          "max": 172000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2370,
          "max": 4090
        },
        "pop_pct": 0.319,
        "pop_py": 6444198
      },
      "At-Risk Customers": {
        "assets": {
          "min": 16000,
          "max": 65000
        },
        "debt": {
          "min": 38000,
          "max": 151000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2580,
          "max": 4300
        },
        "pop_pct": 0.188,
        "pop_py": 3797835
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 151000,
          "max": 603000
        },
        "debt": {
          "min": 27000,
          "max": 108000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2800,
          "max": 4520
        },
        "pop_pct": 0.311,
        "pop_py": 6282588
      },
      "Frequent Traveler": {
        "assets": {
          "min": 215000,
          "max": 861000
        },
        "debt": {
          "min": 86000,
          "max": 344000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6460,
          "max": 10760
        },
        "pop_pct": 0.127,
        "pop_py": 2565559
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 43000,
          "max": 172000
        },
        "debt": {
          "min": 27000,
          "max": 108000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2690,
          "max": 4520
        },
        "pop_pct": 0.12,
        "pop_py": 2424150
      }
    }
  },
  {
    "state_name": "North Carolina",
    "state_code": "NC",
    "population": 10439388,
    "cost_index_2020": 94.0,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 188000,
          "max": 752000
        },
        "debt": {
          "min": 94000,
          "max": 376000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4700,
          "max": 7520
        },
        "pop_pct": 0.58,
        "pop_py": 6054845
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 75000,
          "max": 301000
        },
        "debt": {
          "min": 56000,
          "max": 226000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3290,
          "max": 5450
        },
        "pop_pct": 0.27,
        "pop_py": 2818635
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 470000,
          "max": 1880000
        },
        "debt": {
          "min": 94000,
          "max": 376000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11280,
          "max": 23500
        },
        "pop_pct": 0.040999999999999995,
        "pop_py": 428015
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 113000,
          "max": 451000
        },
        "debt": {
          "min": 28000,
          "max": 113000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2630,
          "max": 4230
        },
        "pop_pct": 0.39899999999999997,
        "pop_py": 4165316
      },
      "Frequent Travelers": {
        "assets": {
          "min": 188000,
          "max": 752000
        },
        "debt": {
          "min": 75000,
          "max": 301000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5640,
          "max": 9400
        },
        "pop_pct": 0.1,
        "pop_py": 1043939
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 38000,
          "max": 150000
        },
        "debt": {
          "min": 24000,
          "max": 94000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2350,
          "max": 3950
        },
        "pop_pct": 0.19699999999999998,
        "pop_py": 2056559
      },
      "Small Business Owners": {
        "assets": {
          "min": 235000,
          "max": 940000
        },
        "debt": {
          "min": 141000,
          "max": 564000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5170,
          "max": 8460
        },
        "pop_pct": 0.153,
        "pop_py": 1597226
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 113000
        },
        "debt": {
          "min": 19000,
          "max": 75000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2630,
          "max": 4510
        },
        "pop_pct": 0.221,
        "pop_py": 2307105
      },
      "Families with Children": {
        "assets": {
          "min": 141000,
          "max": 564000
        },
        "debt": {
          "min": 94000,
          "max": 376000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4700,
          "max": 7990
        },
        "pop_pct": 0.35600000000000004,
        "pop_py": 3716422
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 282000,
          "max": 1128000
        },
        "debt": {
          "min": 19000,
          "max": 75000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3010,
          "max": 5170
        },
        "pop_pct": 0.198,
        "pop_py": 2066999
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 376000,
          "max": 1504000
        },
        "debt": {
          "min": 113000,
          "max": 451000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9400,
          "max": 18800
        },
        "pop_pct": 0.042,
        "pop_py": 438454
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 19000,
          "max": 75000
        },
        "debt": {
          "min": 14000,
          "max": 56000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1880,
          "max": 3290
        },
        "pop_pct": 0.198,
        "pop_py": 2066999
      },
      "Digital Natives": {
        "assets": {
          "min": 33000,
          "max": 132000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2820,
          "max": 4700
        },
        "pop_pct": 0.235,
        "pop_py": 2453256
      },
      "Renters": {
        "assets": {
          "min": 24000,
          "max": 94000
        },
        "debt": {
          "min": 19000,
          "max": 75000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3010,
          "max": 5170
        },
        "pop_pct": 0.267,
        "pop_py": 2787317
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 19000
        },
        "debt": {
          "min": 9000,
          "max": 38000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1130,
          "max": 2070
        },
        "pop_pct": 0.166,
        "pop_py": 1732938
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 38000
        },
        "debt": {
          "min": 38000,
          "max": 150000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2070,
          "max": 3570
        },
        "pop_pct": 0.293,
        "pop_py": 3058741
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 56000
        },
        "debt": {
          "min": 33000,
          "max": 132000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2260,
          "max": 3760
        },
        "pop_pct": 0.247,
        "pop_py": 2578529
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 132000,
          "max": 526000
        },
        "debt": {
          "min": 24000,
          "max": 94000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2440,
          "max": 3950
        },
        "pop_pct": 0.28300000000000003,
        "pop_py": 2954347
      },
      "Frequent Traveler": {
        "assets": {
          "min": 188000,
          "max": 752000
        },
        "debt": {
          "min": 75000,
          "max": 301000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5640,
          "max": 9400
        },
        "pop_pct": 0.086,
        "pop_py": 897787
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 38000,
          "max": 150000
        },
        "debt": {
          "min": 24000,
          "max": 94000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2350,
          "max": 3950
        },
        "pop_pct": 0.147,
        "pop_py": 1534590
      }
    }
  },
  {
    "state_name": "North Dakota",
    "state_code": "ND",
    "population": 779094,
    "cost_index_2020": 88.7,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 175000,
          "max": 700000
        },
        "debt": {
          "min": 87500,
          "max": 350000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 680,
          "max": 750
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4380,
          "max": 7000
        },
        "pop_pct": 0.621,
        "pop_py": 483817
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 71000,
          "max": 284000
        },
        "debt": {
          "min": 53000,
          "max": 213000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3100,
          "max": 5140
        },
        "pop_pct": 0.252,
        "pop_py": 196332
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 444000,
          "max": 1774000
        },
        "debt": {
          "min": 89000,
          "max": 355000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10640,
          "max": 22180
        },
        "pop_pct": 0.008,
        "pop_py": 6233
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 106000,
          "max": 426000
        },
        "debt": {
          "min": 27000,
          "max": 106000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2480,
          "max": 3990
        },
        "pop_pct": 0.34,
        "pop_py": 264892
      },
      "Frequent Travelers": {
        "assets": {
          "min": 177000,
          "max": 710000
        },
        "debt": {
          "min": 71000,
          "max": 284000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5320,
          "max": 8870
        },
        "pop_pct": 0.162,
        "pop_py": 126213
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 35000,
          "max": 142000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2220,
          "max": 3730
        },
        "pop_pct": 0.13699999999999998,
        "pop_py": 106736
      },
      "Small Business Owners": {
        "assets": {
          "min": 222000,
          "max": 887000
        },
        "debt": {
          "min": 133000,
          "max": 532000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4880,
          "max": 7980
        },
        "pop_pct": 0.201,
        "pop_py": 156598
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 106000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2480,
          "max": 4260
        },
        "pop_pct": 0.12300000000000001,
        "pop_py": 95829
      },
      "Families with Children": {
        "assets": {
          "min": 133000,
          "max": 532000
        },
        "debt": {
          "min": 89000,
          "max": 355000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4440,
          "max": 7540
        },
        "pop_pct": 0.33899999999999997,
        "pop_py": 264113
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 266000,
          "max": 1064000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2840,
          "max": 4880
        },
        "pop_pct": 0.203,
        "pop_py": 158156
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 355000,
          "max": 1419000
        },
        "debt": {
          "min": 106000,
          "max": 426000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8870,
          "max": 17740
        },
        "pop_pct": 0.034,
        "pop_py": 26489
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 71000
        },
        "debt": {
          "min": 13000,
          "max": 53000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1770,
          "max": 3100
        },
        "pop_pct": 0.18,
        "pop_py": 140237
      },
      "Digital Natives": {
        "assets": {
          "min": 31000,
          "max": 124000
        },
        "debt": {
          "min": 16000,
          "max": 64000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4440
        },
        "pop_pct": 0.203,
        "pop_py": 158156
      },
      "Renters": {
        "assets": {
          "min": 22000,
          "max": 89000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2840,
          "max": 4880
        },
        "pop_pct": 0.256,
        "pop_py": 199448
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 35000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1060,
          "max": 1950
        },
        "pop_pct": 0.182,
        "pop_py": 141795
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 35000
        },
        "debt": {
          "min": 35000,
          "max": 142000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1950,
          "max": 3370
        },
        "pop_pct": 0.27899999999999997,
        "pop_py": 217367
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 53000
        },
        "debt": {
          "min": 31000,
          "max": 124000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2130,
          "max": 3550
        },
        "pop_pct": 0.166,
        "pop_py": 129330
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 124000,
          "max": 497000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2310,
          "max": 3730
        },
        "pop_pct": 0.259,
        "pop_py": 201785
      },
      "Frequent Traveler": {
        "assets": {
          "min": 177000,
          "max": 710000
        },
        "debt": {
          "min": 71000,
          "max": 284000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5320,
          "max": 8870
        },
        "pop_pct": 0.047,
        "pop_py": 36617
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 35000,
          "max": 142000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2220,
          "max": 3730
        },
        "pop_pct": 0.161,
        "pop_py": 125434
      }
    }
  },
  {
    "state_name": "Ohio",
    "state_code": "OH",
    "population": 11799448,
    "cost_index_2020": 91.5,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 185500,
          "max": 742000
        },
        "debt": {
          "min": 92750,
          "max": 371000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4630,
          "max": 7420
        },
        "pop_pct": 0.6559999999999999,
        "pop_py": 7740438
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 73000,
          "max": 293000
        },
        "debt": {
          "min": 55000,
          "max": 220000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3200,
          "max": 5310
        },
        "pop_pct": 0.257,
        "pop_py": 3032458
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 458000,
          "max": 1830000
        },
        "debt": {
          "min": 92000,
          "max": 366000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10980,
          "max": 22880
        },
        "pop_pct": 0.022000000000000002,
        "pop_py": 259588
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 110000,
          "max": 439000
        },
        "debt": {
          "min": 27000,
          "max": 110000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2560,
          "max": 4120
        },
        "pop_pct": 0.289,
        "pop_py": 3410040
      },
      "Frequent Travelers": {
        "assets": {
          "min": 183000,
          "max": 732000
        },
        "debt": {
          "min": 73000,
          "max": 293000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5490,
          "max": 9150
        },
        "pop_pct": 0.14800000000000002,
        "pop_py": 1746318
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 37000,
          "max": 146000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2290,
          "max": 3840
        },
        "pop_pct": 0.17300000000000001,
        "pop_py": 2041305
      },
      "Small Business Owners": {
        "assets": {
          "min": 229000,
          "max": 915000
        },
        "debt": {
          "min": 137000,
          "max": 549000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5030,
          "max": 8240
        },
        "pop_pct": 0.17800000000000002,
        "pop_py": 2100302
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 110000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2560,
          "max": 4390
        },
        "pop_pct": 0.205,
        "pop_py": 2418887
      },
      "Families with Children": {
        "assets": {
          "min": 137000,
          "max": 549000
        },
        "debt": {
          "min": 92000,
          "max": 366000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4580,
          "max": 7780
        },
        "pop_pct": 0.38799999999999996,
        "pop_py": 4578186
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 274000,
          "max": 1098000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2930,
          "max": 5030
        },
        "pop_pct": 0.14800000000000002,
        "pop_py": 1746318
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 366000,
          "max": 1464000
        },
        "debt": {
          "min": 110000,
          "max": 439000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9150,
          "max": 18300
        },
        "pop_pct": 0.012,
        "pop_py": 141593
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 73000
        },
        "debt": {
          "min": 14000,
          "max": 55000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1830,
          "max": 3200
        },
        "pop_pct": 0.21100000000000002,
        "pop_py": 2489684
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 128000
        },
        "debt": {
          "min": 16000,
          "max": 66000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2740,
          "max": 4580
        },
        "pop_pct": 0.18899999999999997,
        "pop_py": 2230096
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 92000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2930,
          "max": 5030
        },
        "pop_pct": 0.314,
        "pop_py": 3705027
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 37000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1100,
          "max": 2010
        },
        "pop_pct": 0.18600000000000003,
        "pop_py": 2194697
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 37000
        },
        "debt": {
          "min": 37000,
          "max": 146000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2010,
          "max": 3480
        },
        "pop_pct": 0.21600000000000003,
        "pop_py": 2548681
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 55000
        },
        "debt": {
          "min": 32000,
          "max": 128000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2200,
          "max": 3660
        },
        "pop_pct": 0.237,
        "pop_py": 2796469
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 128000,
          "max": 512000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2380,
          "max": 3840
        },
        "pop_pct": 0.32,
        "pop_py": 3775823
      },
      "Frequent Traveler": {
        "assets": {
          "min": 183000,
          "max": 732000
        },
        "debt": {
          "min": 73000,
          "max": 293000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5490,
          "max": 9150
        },
        "pop_pct": 0.14300000000000002,
        "pop_py": 1687321
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 37000,
          "max": 146000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2290,
          "max": 3840
        },
        "pop_pct": 0.166,
        "pop_py": 1958708
      }
    }
  },
  {
    "state_name": "Oklahoma",
    "state_code": "OK",
    "population": 3959353,
    "cost_index_2020": 88.8,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 176000,
          "max": 704000
        },
        "debt": {
          "min": 88000,
          "max": 352000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 680,
          "max": 750
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4400,
          "max": 7040
        },
        "pop_pct": 0.612,
        "pop_py": 2423124
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 71000,
          "max": 284000
        },
        "debt": {
          "min": 53000,
          "max": 213000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3110,
          "max": 5150
        },
        "pop_pct": 0.182,
        "pop_py": 720602
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 444000,
          "max": 1776000
        },
        "debt": {
          "min": 89000,
          "max": 355000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10660,
          "max": 22200
        },
        "pop_pct": 0.013000000000000001,
        "pop_py": 51472
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 107000,
          "max": 426000
        },
        "debt": {
          "min": 27000,
          "max": 107000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2490,
          "max": 4000
        },
        "pop_pct": 0.24600000000000002,
        "pop_py": 974001
      },
      "Frequent Travelers": {
        "assets": {
          "min": 178000,
          "max": 710000
        },
        "debt": {
          "min": 71000,
          "max": 284000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5330,
          "max": 8880
        },
        "pop_pct": 0.16899999999999998,
        "pop_py": 669131
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 36000,
          "max": 142000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2220,
          "max": 3730
        },
        "pop_pct": 0.149,
        "pop_py": 589944
      },
      "Small Business Owners": {
        "assets": {
          "min": 222000,
          "max": 888000
        },
        "debt": {
          "min": 133000,
          "max": 533000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4880,
          "max": 7990
        },
        "pop_pct": 0.11599999999999999,
        "pop_py": 459285
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 107000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2490,
          "max": 4260
        },
        "pop_pct": 0.13,
        "pop_py": 514716
      },
      "Families with Children": {
        "assets": {
          "min": 133000,
          "max": 533000
        },
        "debt": {
          "min": 89000,
          "max": 355000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4440,
          "max": 7550
        },
        "pop_pct": 0.365,
        "pop_py": 1445164
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 266000,
          "max": 1066000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2840,
          "max": 4880
        },
        "pop_pct": 0.19699999999999998,
        "pop_py": 779993
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 355000,
          "max": 1421000
        },
        "debt": {
          "min": 107000,
          "max": 426000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8880,
          "max": 17760
        },
        "pop_pct": 0.055,
        "pop_py": 217764
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 71000
        },
        "debt": {
          "min": 13000,
          "max": 53000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1780,
          "max": 3110
        },
        "pop_pct": 0.253,
        "pop_py": 1001716
      },
      "Digital Natives": {
        "assets": {
          "min": 31000,
          "max": 124000
        },
        "debt": {
          "min": 16000,
          "max": 64000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4440
        },
        "pop_pct": 0.204,
        "pop_py": 807708
      },
      "Renters": {
        "assets": {
          "min": 22000,
          "max": 89000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2840,
          "max": 4880
        },
        "pop_pct": 0.255,
        "pop_py": 1009635
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 36000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1070,
          "max": 1950
        },
        "pop_pct": 0.12,
        "pop_py": 475122
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 36000
        },
        "debt": {
          "min": 36000,
          "max": 142000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1950,
          "max": 3370
        },
        "pop_pct": 0.239,
        "pop_py": 946285
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 53000
        },
        "debt": {
          "min": 31000,
          "max": 124000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2130,
          "max": 3550
        },
        "pop_pct": 0.22,
        "pop_py": 871058
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 124000,
          "max": 497000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2310,
          "max": 3730
        },
        "pop_pct": 0.313,
        "pop_py": 1239277
      },
      "Frequent Traveler": {
        "assets": {
          "min": 178000,
          "max": 710000
        },
        "debt": {
          "min": 71000,
          "max": 284000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5330,
          "max": 8880
        },
        "pop_pct": 0.061,
        "pop_py": 241521
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 36000,
          "max": 142000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2220,
          "max": 3730
        },
        "pop_pct": 0.091,
        "pop_py": 360301
      }
    }
  },
  {
    "state_name": "Oregon",
    "state_code": "OR",
    "population": 4237256,
    "cost_index_2020": 106.6,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 222000,
          "max": 888000
        },
        "debt": {
          "min": 116000,
          "max": 464000
        },
        "debt_to_income_ratio": 0.31,
        "credit_score": {
          "min": 705,
          "max": 775
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5550,
          "max": 8880
        },
        "pop_pct": 0.502,
        "pop_py": 2127103
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 85000,
          "max": 341000
        },
        "debt": {
          "min": 64000,
          "max": 256000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3730,
          "max": 6180
        },
        "pop_pct": 0.331,
        "pop_py": 1402532
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 533000,
          "max": 2132000
        },
        "debt": {
          "min": 107000,
          "max": 426000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12790,
          "max": 26650
        },
        "pop_pct": 0.128,
        "pop_py": 542369
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 128000,
          "max": 512000
        },
        "debt": {
          "min": 32000,
          "max": 128000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2980,
          "max": 4800
        },
        "pop_pct": 0.358,
        "pop_py": 1516938
      },
      "Frequent Travelers": {
        "assets": {
          "min": 213000,
          "max": 853000
        },
        "debt": {
          "min": 85000,
          "max": 341000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6400,
          "max": 10660
        },
        "pop_pct": 0.207,
        "pop_py": 877112
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 43000,
          "max": 171000
        },
        "debt": {
          "min": 27000,
          "max": 107000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4480
        },
        "pop_pct": 0.161,
        "pop_py": 682198
      },
      "Small Business Owners": {
        "assets": {
          "min": 266000,
          "max": 1066000
        },
        "debt": {
          "min": 160000,
          "max": 640000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5860,
          "max": 9590
        },
        "pop_pct": 0.24100000000000002,
        "pop_py": 1021179
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 32000,
          "max": 128000
        },
        "debt": {
          "min": 21000,
          "max": 85000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2980,
          "max": 5120
        },
        "pop_pct": 0.22399999999999998,
        "pop_py": 949145
      },
      "Families with Children": {
        "assets": {
          "min": 160000,
          "max": 640000
        },
        "debt": {
          "min": 107000,
          "max": 426000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5330,
          "max": 9060
        },
        "pop_pct": 0.266,
        "pop_py": 1127110
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 320000,
          "max": 1279000
        },
        "debt": {
          "min": 21000,
          "max": 85000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3410,
          "max": 5860
        },
        "pop_pct": 0.22,
        "pop_py": 932196
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 426000,
          "max": 1706000
        },
        "debt": {
          "min": 128000,
          "max": 512000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10660,
          "max": 21320
        },
        "pop_pct": 0.065,
        "pop_py": 275422
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 21000,
          "max": 85000
        },
        "debt": {
          "min": 16000,
          "max": 64000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2130,
          "max": 3730
        },
        "pop_pct": 0.25,
        "pop_py": 1059314
      },
      "Digital Natives": {
        "assets": {
          "min": 37000,
          "max": 149000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3200,
          "max": 5330
        },
        "pop_pct": 0.301,
        "pop_py": 1275414
      },
      "Renters": {
        "assets": {
          "min": 27000,
          "max": 107000
        },
        "debt": {
          "min": 21000,
          "max": 85000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3410,
          "max": 5860
        },
        "pop_pct": 0.41200000000000003,
        "pop_py": 1745749
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 21000
        },
        "debt": {
          "min": 11000,
          "max": 43000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1280,
          "max": 2350
        },
        "pop_pct": 0.22,
        "pop_py": 932196
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 43000
        },
        "debt": {
          "min": 43000,
          "max": 171000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2350,
          "max": 4050
        },
        "pop_pct": 0.182,
        "pop_py": 771181
      },
      "At-Risk Customers": {
        "assets": {
          "min": 16000,
          "max": 64000
        },
        "debt": {
          "min": 37000,
          "max": 149000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2560,
          "max": 4260
        },
        "pop_pct": 0.235,
        "pop_py": 995755
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 149000,
          "max": 597000
        },
        "debt": {
          "min": 27000,
          "max": 107000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2770,
          "max": 4480
        },
        "pop_pct": 0.253,
        "pop_py": 1072026
      },
      "Frequent Traveler": {
        "assets": {
          "min": 213000,
          "max": 853000
        },
        "debt": {
          "min": 85000,
          "max": 341000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6400,
          "max": 10660
        },
        "pop_pct": 0.14400000000000002,
        "pop_py": 610165
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 43000,
          "max": 171000
        },
        "debt": {
          "min": 27000,
          "max": 107000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2660,
          "max": 4480
        },
        "pop_pct": 0.057,
        "pop_py": 241524
      }
    }
  },
  {
    "state_name": "Pennsylvania",
    "state_code": "PA",
    "population": 13002700,
    "cost_index_2020": 96.2,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 194000,
          "max": 776000
        },
        "debt": {
          "min": 97000,
          "max": 388000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 695,
          "max": 765
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4850,
          "max": 7760
        },
        "pop_pct": 0.589,
        "pop_py": 7658590
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 77000,
          "max": 308000
        },
        "debt": {
          "min": 58000,
          "max": 231000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3370,
          "max": 5580
        },
        "pop_pct": 0.23,
        "pop_py": 2990621
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 481000,
          "max": 1924000
        },
        "debt": {
          "min": 96000,
          "max": 385000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11540,
          "max": 24050
        },
        "pop_pct": 0.048,
        "pop_py": 624130
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 115000,
          "max": 462000
        },
        "debt": {
          "min": 29000,
          "max": 115000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2690,
          "max": 4330
        },
        "pop_pct": 0.37,
        "pop_py": 4810999
      },
      "Frequent Travelers": {
        "assets": {
          "min": 192000,
          "max": 770000
        },
        "debt": {
          "min": 77000,
          "max": 308000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5770,
          "max": 9620
        },
        "pop_pct": 0.19899999999999998,
        "pop_py": 2587537
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 38000,
          "max": 154000
        },
        "debt": {
          "min": 24000,
          "max": 96000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2400,
          "max": 4040
        },
        "pop_pct": 0.18899999999999997,
        "pop_py": 2457510
      },
      "Small Business Owners": {
        "assets": {
          "min": 241000,
          "max": 962000
        },
        "debt": {
          "min": 144000,
          "max": 577000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5290,
          "max": 8660
        },
        "pop_pct": 0.11599999999999999,
        "pop_py": 1508313
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 29000,
          "max": 115000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2690,
          "max": 4620
        },
        "pop_pct": 0.231,
        "pop_py": 3003624
      },
      "Families with Children": {
        "assets": {
          "min": 144000,
          "max": 577000
        },
        "debt": {
          "min": 96000,
          "max": 385000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4810,
          "max": 8180
        },
        "pop_pct": 0.28,
        "pop_py": 3640756
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 289000,
          "max": 1154000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3080,
          "max": 5290
        },
        "pop_pct": 0.184,
        "pop_py": 2392497
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 385000,
          "max": 1539000
        },
        "debt": {
          "min": 115000,
          "max": 462000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9620,
          "max": 19240
        },
        "pop_pct": 0.078,
        "pop_py": 1014211
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 19000,
          "max": 77000
        },
        "debt": {
          "min": 14000,
          "max": 58000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1920,
          "max": 3370
        },
        "pop_pct": 0.223,
        "pop_py": 2899602
      },
      "Digital Natives": {
        "assets": {
          "min": 34000,
          "max": 135000
        },
        "debt": {
          "min": 17000,
          "max": 69000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2890,
          "max": 4810
        },
        "pop_pct": 0.256,
        "pop_py": 3328691
      },
      "Renters": {
        "assets": {
          "min": 24000,
          "max": 96000
        },
        "debt": {
          "min": 19000,
          "max": 77000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3080,
          "max": 5290
        },
        "pop_pct": 0.311,
        "pop_py": 4043840
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 19000
        },
        "debt": {
          "min": 10000,
          "max": 38000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1150,
          "max": 2120
        },
        "pop_pct": 0.16899999999999998,
        "pop_py": 2197456
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 38000
        },
        "debt": {
          "min": 38000,
          "max": 154000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2120,
          "max": 3660
        },
        "pop_pct": 0.237,
        "pop_py": 3081640
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 58000
        },
        "debt": {
          "min": 34000,
          "max": 135000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2310,
          "max": 3850
        },
        "pop_pct": 0.218,
        "pop_py": 2834589
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 135000,
          "max": 539000
        },
        "debt": {
          "min": 24000,
          "max": 96000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2500,
          "max": 4040
        },
        "pop_pct": 0.303,
        "pop_py": 3939818
      },
      "Frequent Traveler": {
        "assets": {
          "min": 192000,
          "max": 770000
        },
        "debt": {
          "min": 77000,
          "max": 308000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5770,
          "max": 9620
        },
        "pop_pct": 0.107,
        "pop_py": 1391289
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 38000,
          "max": 154000
        },
        "debt": {
          "min": 24000,
          "max": 96000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2400,
          "max": 4040
        },
        "pop_pct": 0.094,
        "pop_py": 1222254
      }
    }
  },
  {
    "state_name": "Rhode Island",
    "state_code": "RI",
    "population": 1097379,
    "cost_index_2020": 104.4,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 218000,
          "max": 872000
        },
        "debt": {
          "min": 114000,
          "max": 456000
        },
        "debt_to_income_ratio": 0.31,
        "credit_score": {
          "min": 705,
          "max": 775
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5450,
          "max": 8720
        },
        "pop_pct": 0.56,
        "pop_py": 614532
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 84000,
          "max": 334000
        },
        "debt": {
          "min": 63000,
          "max": 251000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3650,
          "max": 6060
        },
        "pop_pct": 0.268,
        "pop_py": 294098
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 522000,
          "max": 2088000
        },
        "debt": {
          "min": 104000,
          "max": 418000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12530,
          "max": 26100
        },
        "pop_pct": 0.06,
        "pop_py": 65843
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 125000,
          "max": 501000
        },
        "debt": {
          "min": 31000,
          "max": 125000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2920,
          "max": 4700
        },
        "pop_pct": 0.27399999999999997,
        "pop_py": 300682
      },
      "Frequent Travelers": {
        "assets": {
          "min": 209000,
          "max": 835000
        },
        "debt": {
          "min": 84000,
          "max": 334000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6260,
          "max": 10440
        },
        "pop_pct": 0.184,
        "pop_py": 201918
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 42000,
          "max": 167000
        },
        "debt": {
          "min": 26000,
          "max": 104000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2610,
          "max": 4380
        },
        "pop_pct": 0.152,
        "pop_py": 166802
      },
      "Small Business Owners": {
        "assets": {
          "min": 261000,
          "max": 1044000
        },
        "debt": {
          "min": 157000,
          "max": 626000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5740,
          "max": 9400
        },
        "pop_pct": 0.192,
        "pop_py": 210697
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 31000,
          "max": 125000
        },
        "debt": {
          "min": 21000,
          "max": 84000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2920,
          "max": 5010
        },
        "pop_pct": 0.159,
        "pop_py": 174483
      },
      "Families with Children": {
        "assets": {
          "min": 157000,
          "max": 626000
        },
        "debt": {
          "min": 104000,
          "max": 418000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5220,
          "max": 8870
        },
        "pop_pct": 0.327,
        "pop_py": 358843
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 313000,
          "max": 1253000
        },
        "debt": {
          "min": 21000,
          "max": 84000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3340,
          "max": 5740
        },
        "pop_pct": 0.24,
        "pop_py": 263371
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 418000,
          "max": 1670000
        },
        "debt": {
          "min": 125000,
          "max": 501000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10440,
          "max": 20880
        },
        "pop_pct": 0.114,
        "pop_py": 125101
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 21000,
          "max": 84000
        },
        "debt": {
          "min": 16000,
          "max": 63000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2090,
          "max": 3650
        },
        "pop_pct": 0.249,
        "pop_py": 273247
      },
      "Digital Natives": {
        "assets": {
          "min": 37000,
          "max": 146000
        },
        "debt": {
          "min": 19000,
          "max": 75000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3130,
          "max": 5220
        },
        "pop_pct": 0.304,
        "pop_py": 333603
      },
      "Renters": {
        "assets": {
          "min": 26000,
          "max": 104000
        },
        "debt": {
          "min": 21000,
          "max": 84000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3340,
          "max": 5740
        },
        "pop_pct": 0.363,
        "pop_py": 398349
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 21000
        },
        "debt": {
          "min": 10000,
          "max": 42000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1250,
          "max": 2300
        },
        "pop_pct": 0.179,
        "pop_py": 196431
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 42000
        },
        "debt": {
          "min": 42000,
          "max": 167000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3970
        },
        "pop_pct": 0.267,
        "pop_py": 293000
      },
      "At-Risk Customers": {
        "assets": {
          "min": 16000,
          "max": 63000
        },
        "debt": {
          "min": 37000,
          "max": 146000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2510,
          "max": 4180
        },
        "pop_pct": 0.214,
        "pop_py": 234839
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 146000,
          "max": 585000
        },
        "debt": {
          "min": 26000,
          "max": 104000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2710,
          "max": 4380
        },
        "pop_pct": 0.24100000000000002,
        "pop_py": 264468
      },
      "Frequent Traveler": {
        "assets": {
          "min": 209000,
          "max": 835000
        },
        "debt": {
          "min": 84000,
          "max": 334000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6260,
          "max": 10440
        },
        "pop_pct": 0.129,
        "pop_py": 141562
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 42000,
          "max": 167000
        },
        "debt": {
          "min": 26000,
          "max": 104000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2610,
          "max": 4380
        },
        "pop_pct": 0.115,
        "pop_py": 126199
      }
    }
  },
  {
    "state_name": "South Carolina",
    "state_code": "SC",
    "population": 5118425,
    "cost_index_2020": 93.3,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 187000,
          "max": 748000
        },
        "debt": {
          "min": 93500,
          "max": 374000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4680,
          "max": 7480
        },
        "pop_pct": 0.64,
        "pop_py": 3275792
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 75000,
          "max": 299000
        },
        "debt": {
          "min": 56000,
          "max": 224000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3270,
          "max": 5410
        },
        "pop_pct": 0.264,
        "pop_py": 1351264
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 466000,
          "max": 1866000
        },
        "debt": {
          "min": 93000,
          "max": 373000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11200,
          "max": 23320
        },
        "pop_pct": 0.035,
        "pop_py": 179145
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 112000,
          "max": 448000
        },
        "debt": {
          "min": 28000,
          "max": 112000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2610,
          "max": 4200
        },
        "pop_pct": 0.29600000000000004,
        "pop_py": 1515054
      },
      "Frequent Travelers": {
        "assets": {
          "min": 187000,
          "max": 746000
        },
        "debt": {
          "min": 75000,
          "max": 299000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5600,
          "max": 9330
        },
        "pop_pct": 0.151,
        "pop_py": 772882
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 37000,
          "max": 149000
        },
        "debt": {
          "min": 23000,
          "max": 93000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2330,
          "max": 3920
        },
        "pop_pct": 0.209,
        "pop_py": 1069751
      },
      "Small Business Owners": {
        "assets": {
          "min": 233000,
          "max": 933000
        },
        "debt": {
          "min": 140000,
          "max": 560000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5130,
          "max": 8400
        },
        "pop_pct": 0.21,
        "pop_py": 1074869
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 112000
        },
        "debt": {
          "min": 19000,
          "max": 75000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2610,
          "max": 4480
        },
        "pop_pct": 0.171,
        "pop_py": 875251
      },
      "Families with Children": {
        "assets": {
          "min": 140000,
          "max": 560000
        },
        "debt": {
          "min": 93000,
          "max": 373000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4660,
          "max": 7930
        },
        "pop_pct": 0.295,
        "pop_py": 1509935
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 280000,
          "max": 1120000
        },
        "debt": {
          "min": 19000,
          "max": 75000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2990,
          "max": 5130
        },
        "pop_pct": 0.235,
        "pop_py": 1202830
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 373000,
          "max": 1493000
        },
        "debt": {
          "min": 112000,
          "max": 448000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9330,
          "max": 18660
        },
        "pop_pct": 0.054000000000000006,
        "pop_py": 276395
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 19000,
          "max": 75000
        },
        "debt": {
          "min": 14000,
          "max": 56000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1870,
          "max": 3270
        },
        "pop_pct": 0.221,
        "pop_py": 1131172
      },
      "Digital Natives": {
        "assets": {
          "min": 33000,
          "max": 131000
        },
        "debt": {
          "min": 17000,
          "max": 67000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2800,
          "max": 4660
        },
        "pop_pct": 0.27699999999999997,
        "pop_py": 1417804
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 93000
        },
        "debt": {
          "min": 19000,
          "max": 75000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2990,
          "max": 5130
        },
        "pop_pct": 0.215,
        "pop_py": 1100461
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 19000
        },
        "debt": {
          "min": 9000,
          "max": 37000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1120,
          "max": 2050
        },
        "pop_pct": 0.14,
        "pop_py": 716580
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 37000
        },
        "debt": {
          "min": 37000,
          "max": 149000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2050,
          "max": 3550
        },
        "pop_pct": 0.187,
        "pop_py": 957145
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 56000
        },
        "debt": {
          "min": 33000,
          "max": 131000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2240,
          "max": 3730
        },
        "pop_pct": 0.204,
        "pop_py": 1044159
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 131000,
          "max": 522000
        },
        "debt": {
          "min": 23000,
          "max": 93000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2430,
          "max": 3920
        },
        "pop_pct": 0.306,
        "pop_py": 1566238
      },
      "Frequent Traveler": {
        "assets": {
          "min": 187000,
          "max": 746000
        },
        "debt": {
          "min": 75000,
          "max": 299000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5600,
          "max": 9330
        },
        "pop_pct": 0.099,
        "pop_py": 506724
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 37000,
          "max": 149000
        },
        "debt": {
          "min": 23000,
          "max": 93000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2330,
          "max": 3920
        },
        "pop_pct": 0.183,
        "pop_py": 936672
      }
    }
  },
  {
    "state_name": "South Dakota",
    "state_code": "SD",
    "population": 886667,
    "cost_index_2020": 87.9,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 172000,
          "max": 688000
        },
        "debt": {
          "min": 86000,
          "max": 344000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 680,
          "max": 750
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4300,
          "max": 6880
        },
        "pop_pct": 0.644,
        "pop_py": 571014
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 70000,
          "max": 281000
        },
        "debt": {
          "min": 53000,
          "max": 211000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3080,
          "max": 5100
        },
        "pop_pct": 0.237,
        "pop_py": 210140
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 440000,
          "max": 1758000
        },
        "debt": {
          "min": 88000,
          "max": 352000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10550,
          "max": 21980
        },
        "pop_pct": 0.044000000000000004,
        "pop_py": 39013
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 105000,
          "max": 422000
        },
        "debt": {
          "min": 26000,
          "max": 105000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2460,
          "max": 3960
        },
        "pop_pct": 0.358,
        "pop_py": 317427
      },
      "Frequent Travelers": {
        "assets": {
          "min": 176000,
          "max": 703000
        },
        "debt": {
          "min": 70000,
          "max": 281000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5270,
          "max": 8790
        },
        "pop_pct": 0.156,
        "pop_py": 138320
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 35000,
          "max": 141000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2200,
          "max": 3690
        },
        "pop_pct": 0.19399999999999998,
        "pop_py": 172013
      },
      "Small Business Owners": {
        "assets": {
          "min": 220000,
          "max": 879000
        },
        "debt": {
          "min": 132000,
          "max": 527000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4830,
          "max": 7910
        },
        "pop_pct": 0.162,
        "pop_py": 143640
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 26000,
          "max": 105000
        },
        "debt": {
          "min": 18000,
          "max": 70000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2460,
          "max": 4220
        },
        "pop_pct": 0.157,
        "pop_py": 139207
      },
      "Families with Children": {
        "assets": {
          "min": 132000,
          "max": 527000
        },
        "debt": {
          "min": 88000,
          "max": 352000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4400,
          "max": 7470
        },
        "pop_pct": 0.359,
        "pop_py": 318313
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 264000,
          "max": 1055000
        },
        "debt": {
          "min": 18000,
          "max": 70000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2810,
          "max": 4830
        },
        "pop_pct": 0.166,
        "pop_py": 147187
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 352000,
          "max": 1406000
        },
        "debt": {
          "min": 105000,
          "max": 422000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8790,
          "max": 17580
        },
        "pop_pct": 0.022000000000000002,
        "pop_py": 19507
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 70000
        },
        "debt": {
          "min": 13000,
          "max": 53000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1760,
          "max": 3080
        },
        "pop_pct": 0.292,
        "pop_py": 258907
      },
      "Digital Natives": {
        "assets": {
          "min": 31000,
          "max": 123000
        },
        "debt": {
          "min": 16000,
          "max": 63000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2640,
          "max": 4400
        },
        "pop_pct": 0.22899999999999998,
        "pop_py": 203047
      },
      "Renters": {
        "assets": {
          "min": 22000,
          "max": 88000
        },
        "debt": {
          "min": 18000,
          "max": 70000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2810,
          "max": 4830
        },
        "pop_pct": 0.244,
        "pop_py": 216347
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 35000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1050,
          "max": 1930
        },
        "pop_pct": 0.198,
        "pop_py": 175560
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 35000
        },
        "debt": {
          "min": 35000,
          "max": 141000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1930,
          "max": 3340
        },
        "pop_pct": 0.226,
        "pop_py": 200387
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 53000
        },
        "debt": {
          "min": 31000,
          "max": 123000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2110,
          "max": 3520
        },
        "pop_pct": 0.21100000000000002,
        "pop_py": 187087
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 123000,
          "max": 492000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2290,
          "max": 3690
        },
        "pop_pct": 0.281,
        "pop_py": 249153
      },
      "Frequent Traveler": {
        "assets": {
          "min": 176000,
          "max": 703000
        },
        "debt": {
          "min": 70000,
          "max": 281000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5270,
          "max": 8790
        },
        "pop_pct": 0.094,
        "pop_py": 83347
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 35000,
          "max": 141000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2200,
          "max": 3690
        },
        "pop_pct": 0.221,
        "pop_py": 195953
      }
    }
  },
  {
    "state_name": "Tennessee",
    "state_code": "TN",
    "population": 6910840,
    "cost_index_2020": 91.8,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 185000,
          "max": 740000
        },
        "debt": {
          "min": 92000,
          "max": 370000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4600,
          "max": 7400
        },
        "pop_pct": 0.589,
        "pop_py": 4070485
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 73000,
          "max": 294000
        },
        "debt": {
          "min": 55000,
          "max": 220000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3210,
          "max": 5320
        },
        "pop_pct": 0.22699999999999998,
        "pop_py": 1568761
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 459000,
          "max": 1836000
        },
        "debt": {
          "min": 92000,
          "max": 367000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11020,
          "max": 22950
        },
        "pop_pct": 0.008,
        "pop_py": 55287
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 110000,
          "max": 441000
        },
        "debt": {
          "min": 28000,
          "max": 110000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4130
        },
        "pop_pct": 0.304,
        "pop_py": 2100895
      },
      "Frequent Travelers": {
        "assets": {
          "min": 184000,
          "max": 734000
        },
        "debt": {
          "min": 73000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9180
        },
        "pop_pct": 0.174,
        "pop_py": 1202486
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3860
        },
        "pop_pct": 0.188,
        "pop_py": 1299238
      },
      "Small Business Owners": {
        "assets": {
          "min": 229000,
          "max": 918000
        },
        "debt": {
          "min": 138000,
          "max": 551000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5050,
          "max": 8260
        },
        "pop_pct": 0.184,
        "pop_py": 1271595
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 110000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4410
        },
        "pop_pct": 0.171,
        "pop_py": 1181754
      },
      "Families with Children": {
        "assets": {
          "min": 138000,
          "max": 551000
        },
        "debt": {
          "min": 92000,
          "max": 367000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4590,
          "max": 7800
        },
        "pop_pct": 0.375,
        "pop_py": 2591565
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 275000,
          "max": 1102000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.252,
        "pop_py": 1741532
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 367000,
          "max": 1469000
        },
        "debt": {
          "min": 110000,
          "max": 441000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9180,
          "max": 18360
        },
        "pop_pct": 0.03,
        "pop_py": 207325
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 73000
        },
        "debt": {
          "min": 14000,
          "max": 55000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1840,
          "max": 3210
        },
        "pop_pct": 0.20800000000000002,
        "pop_py": 1437455
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 129000
        },
        "debt": {
          "min": 17000,
          "max": 66000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2750,
          "max": 4590
        },
        "pop_pct": 0.27399999999999997,
        "pop_py": 1893570
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 92000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.297,
        "pop_py": 2052519
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 37000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1100,
          "max": 2020
        },
        "pop_pct": 0.158,
        "pop_py": 1091913
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 37000
        },
        "debt": {
          "min": 37000,
          "max": 147000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2020,
          "max": 3490
        },
        "pop_pct": 0.266,
        "pop_py": 1838283
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 55000
        },
        "debt": {
          "min": 32000,
          "max": 129000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2200,
          "max": 3670
        },
        "pop_pct": 0.276,
        "pop_py": 1907392
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 129000,
          "max": 514000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2390,
          "max": 3860
        },
        "pop_pct": 0.28,
        "pop_py": 1935035
      },
      "Frequent Traveler": {
        "assets": {
          "min": 184000,
          "max": 734000
        },
        "debt": {
          "min": 73000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9180
        },
        "pop_pct": 0.077,
        "pop_py": 532135
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2300,
          "max": 3860
        },
        "pop_pct": 0.10099999999999999,
        "pop_py": 697995
      }
    }
  },
  {
    "state_name": "Texas",
    "state_code": "TX",
    "population": 29145505,
    "cost_index_2020": 97.4,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 198000,
          "max": 792000
        },
        "debt": {
          "min": 99000,
          "max": 396000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 695,
          "max": 765
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4950,
          "max": 7920
        },
        "pop_pct": 0.593,
        "pop_py": 17283284
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 78000,
          "max": 312000
        },
        "debt": {
          "min": 58000,
          "max": 234000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3410,
          "max": 5650
        },
        "pop_pct": 0.308,
        "pop_py": 8976816
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 487000,
          "max": 1948000
        },
        "debt": {
          "min": 97000,
          "max": 390000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11690,
          "max": 24350
        },
        "pop_pct": 0.008,
        "pop_py": 233164
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 117000,
          "max": 468000
        },
        "debt": {
          "min": 29000,
          "max": 117000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2730,
          "max": 4380
        },
        "pop_pct": 0.327,
        "pop_py": 9530580
      },
      "Frequent Travelers": {
        "assets": {
          "min": 195000,
          "max": 779000
        },
        "debt": {
          "min": 78000,
          "max": 312000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5840,
          "max": 9740
        },
        "pop_pct": 0.20800000000000002,
        "pop_py": 6062265
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 39000,
          "max": 156000
        },
        "debt": {
          "min": 24000,
          "max": 97000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2440,
          "max": 4090
        },
        "pop_pct": 0.16399999999999998,
        "pop_py": 4779863
      },
      "Small Business Owners": {
        "assets": {
          "min": 244000,
          "max": 974000
        },
        "debt": {
          "min": 146000,
          "max": 584000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5360,
          "max": 8770
        },
        "pop_pct": 0.195,
        "pop_py": 5683373
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 29000,
          "max": 117000
        },
        "debt": {
          "min": 19000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2730,
          "max": 4680
        },
        "pop_pct": 0.138,
        "pop_py": 4022080
      },
      "Families with Children": {
        "assets": {
          "min": 146000,
          "max": 584000
        },
        "debt": {
          "min": 97000,
          "max": 390000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4870,
          "max": 8280
        },
        "pop_pct": 0.36200000000000004,
        "pop_py": 10550673
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 292000,
          "max": 1169000
        },
        "debt": {
          "min": 19000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3120,
          "max": 5360
        },
        "pop_pct": 0.162,
        "pop_py": 4721572
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 390000,
          "max": 1558000
        },
        "debt": {
          "min": 117000,
          "max": 468000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9740,
          "max": 19480
        },
        "pop_pct": 0.078,
        "pop_py": 2273349
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 19000,
          "max": 78000
        },
        "debt": {
          "min": 15000,
          "max": 58000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1950,
          "max": 3410
        },
        "pop_pct": 0.162,
        "pop_py": 4721572
      },
      "Digital Natives": {
        "assets": {
          "min": 34000,
          "max": 136000
        },
        "debt": {
          "min": 18000,
          "max": 70000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2920,
          "max": 4870
        },
        "pop_pct": 0.268,
        "pop_py": 7810995
      },
      "Renters": {
        "assets": {
          "min": 24000,
          "max": 97000
        },
        "debt": {
          "min": 19000,
          "max": 78000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3120,
          "max": 5360
        },
        "pop_pct": 0.336,
        "pop_py": 9792890
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 19000
        },
        "debt": {
          "min": 10000,
          "max": 39000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1170,
          "max": 2140
        },
        "pop_pct": 0.06,
        "pop_py": 1748730
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 39000
        },
        "debt": {
          "min": 39000,
          "max": 156000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2140,
          "max": 3700
        },
        "pop_pct": 0.272,
        "pop_py": 7927577
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 58000
        },
        "debt": {
          "min": 34000,
          "max": 136000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2340,
          "max": 3900
        },
        "pop_pct": 0.23199999999999998,
        "pop_py": 6761757
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 136000,
          "max": 545000
        },
        "debt": {
          "min": 24000,
          "max": 97000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2530,
          "max": 4090
        },
        "pop_pct": 0.28,
        "pop_py": 8160741
      },
      "Frequent Traveler": {
        "assets": {
          "min": 195000,
          "max": 779000
        },
        "debt": {
          "min": 78000,
          "max": 312000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5840,
          "max": 9740
        },
        "pop_pct": 0.087,
        "pop_py": 2535659
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 39000,
          "max": 156000
        },
        "debt": {
          "min": 24000,
          "max": 97000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2440,
          "max": 4090
        },
        "pop_pct": 0.139,
        "pop_py": 4051225
      }
    }
  },
  {
    "state_name": "Utah",
    "state_code": "UT",
    "population": 3271616,
    "cost_index_2020": 94.6,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 189000,
          "max": 756000
        },
        "debt": {
          "min": 94500,
          "max": 378000
        },
        "debt_to_income_ratio": 0.33,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4720,
          "max": 7560
        },
        "pop_pct": 0.598,
        "pop_py": 1956426
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 76000,
          "max": 303000
        },
        "debt": {
          "min": 57000,
          "max": 227000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3310,
          "max": 5490
        },
        "pop_pct": 0.312,
        "pop_py": 1020744
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 473000,
          "max": 1892000
        },
        "debt": {
          "min": 95000,
          "max": 378000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11350,
          "max": 23650
        },
        "pop_pct": 0.083,
        "pop_py": 271544
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 114000,
          "max": 454000
        },
        "debt": {
          "min": 28000,
          "max": 114000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2650,
          "max": 4260
        },
        "pop_pct": 0.34700000000000003,
        "pop_py": 1135251
      },
      "Frequent Travelers": {
        "assets": {
          "min": 189000,
          "max": 757000
        },
        "debt": {
          "min": 76000,
          "max": 303000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5680,
          "max": 9460
        },
        "pop_pct": 0.161,
        "pop_py": 526730
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 38000,
          "max": 151000
        },
        "debt": {
          "min": 24000,
          "max": 95000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2360,
          "max": 3970
        },
        "pop_pct": 0.19699999999999998,
        "pop_py": 644508
      },
      "Small Business Owners": {
        "assets": {
          "min": 236000,
          "max": 946000
        },
        "debt": {
          "min": 142000,
          "max": 568000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5200,
          "max": 8510
        },
        "pop_pct": 0.159,
        "pop_py": 520187
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 114000
        },
        "debt": {
          "min": 19000,
          "max": 76000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2650,
          "max": 4540
        },
        "pop_pct": 0.17300000000000001,
        "pop_py": 565990
      },
      "Families with Children": {
        "assets": {
          "min": 142000,
          "max": 568000
        },
        "debt": {
          "min": 95000,
          "max": 378000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4730,
          "max": 8040
        },
        "pop_pct": 0.344,
        "pop_py": 1125436
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 284000,
          "max": 1135000
        },
        "debt": {
          "min": 19000,
          "max": 76000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3030,
          "max": 5200
        },
        "pop_pct": 0.19,
        "pop_py": 621607
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 378000,
          "max": 1514000
        },
        "debt": {
          "min": 114000,
          "max": 454000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9460,
          "max": 18920
        },
        "pop_pct": 0.105,
        "pop_py": 343520
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 19000,
          "max": 76000
        },
        "debt": {
          "min": 14000,
          "max": 57000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1890,
          "max": 3310
        },
        "pop_pct": 0.23800000000000002,
        "pop_py": 778645
      },
      "Digital Natives": {
        "assets": {
          "min": 33000,
          "max": 132000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2840,
          "max": 4730
        },
        "pop_pct": 0.275,
        "pop_py": 899694
      },
      "Renters": {
        "assets": {
          "min": 24000,
          "max": 95000
        },
        "debt": {
          "min": 19000,
          "max": 76000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3030,
          "max": 5200
        },
        "pop_pct": 0.285,
        "pop_py": 932411
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 19000
        },
        "debt": {
          "min": 9000,
          "max": 38000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1140,
          "max": 2080
        },
        "pop_pct": 0.172,
        "pop_py": 562718
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 38000
        },
        "debt": {
          "min": 38000,
          "max": 151000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2080,
          "max": 3590
        },
        "pop_pct": 0.221,
        "pop_py": 723027
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 57000
        },
        "debt": {
          "min": 33000,
          "max": 132000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2270,
          "max": 3780
        },
        "pop_pct": 0.278,
        "pop_py": 909509
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 132000,
          "max": 530000
        },
        "debt": {
          "min": 24000,
          "max": 95000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2460,
          "max": 3970
        },
        "pop_pct": 0.32,
        "pop_py": 1046917
      },
      "Frequent Traveler": {
        "assets": {
          "min": 189000,
          "max": 757000
        },
        "debt": {
          "min": 76000,
          "max": 303000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5680,
          "max": 9460
        },
        "pop_pct": 0.133,
        "pop_py": 435125
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 38000,
          "max": 151000
        },
        "debt": {
          "min": 24000,
          "max": 95000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2360,
          "max": 3970
        },
        "pop_pct": 0.17300000000000001,
        "pop_py": 565990
      }
    }
  },
  {
    "state_name": "Vermont",
    "state_code": "VT",
    "population": 643077,
    "cost_index_2020": 100.99,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 202000,
          "max": 808000
        },
        "debt": {
          "min": 101000,
          "max": 404000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 700,
          "max": 770
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5050,
          "max": 8080
        },
        "pop_pct": 0.5539999999999999,
        "pop_py": 356265
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 81000,
          "max": 323000
        },
        "debt": {
          "min": 61000,
          "max": 242000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3530,
          "max": 5860
        },
        "pop_pct": 0.26,
        "pop_py": 167200
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 505000,
          "max": 2020000
        },
        "debt": {
          "min": 101000,
          "max": 404000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12120,
          "max": 25250
        },
        "pop_pct": 0.083,
        "pop_py": 53375
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 121000,
          "max": 485000
        },
        "debt": {
          "min": 30000,
          "max": 121000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2830,
          "max": 4540
        },
        "pop_pct": 0.281,
        "pop_py": 180705
      },
      "Frequent Travelers": {
        "assets": {
          "min": 202000,
          "max": 808000
        },
        "debt": {
          "min": 81000,
          "max": 323000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6060,
          "max": 10100
        },
        "pop_pct": 0.16699999999999998,
        "pop_py": 107394
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 40000,
          "max": 162000
        },
        "debt": {
          "min": 25000,
          "max": 101000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2520,
          "max": 4240
        },
        "pop_pct": 0.155,
        "pop_py": 99677
      },
      "Small Business Owners": {
        "assets": {
          "min": 252000,
          "max": 1010000
        },
        "debt": {
          "min": 151000,
          "max": 606000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5550,
          "max": 9090
        },
        "pop_pct": 0.201,
        "pop_py": 129258
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 30000,
          "max": 121000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2830,
          "max": 4850
        },
        "pop_pct": 0.209,
        "pop_py": 134403
      },
      "Families with Children": {
        "assets": {
          "min": 151000,
          "max": 606000
        },
        "debt": {
          "min": 101000,
          "max": 404000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5050,
          "max": 8580
        },
        "pop_pct": 0.3,
        "pop_py": 192923
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 303000,
          "max": 1212000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3230,
          "max": 5550
        },
        "pop_pct": 0.168,
        "pop_py": 108037
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 404000,
          "max": 1616000
        },
        "debt": {
          "min": 121000,
          "max": 485000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10100,
          "max": 20200
        },
        "pop_pct": 0.03,
        "pop_py": 19292
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 20000,
          "max": 81000
        },
        "debt": {
          "min": 15000,
          "max": 61000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2020,
          "max": 3530
        },
        "pop_pct": 0.23399999999999999,
        "pop_py": 150480
      },
      "Digital Natives": {
        "assets": {
          "min": 35000,
          "max": 141000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3030,
          "max": 5050
        },
        "pop_pct": 0.281,
        "pop_py": 180705
      },
      "Renters": {
        "assets": {
          "min": 25000,
          "max": 101000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3230,
          "max": 5550
        },
        "pop_pct": 0.258,
        "pop_py": 165914
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 20000
        },
        "debt": {
          "min": 10000,
          "max": 40000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1210,
          "max": 2220
        },
        "pop_pct": 0.134,
        "pop_py": 86172
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 40000
        },
        "debt": {
          "min": 40000,
          "max": 162000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2220,
          "max": 3840
        },
        "pop_pct": 0.221,
        "pop_py": 142120
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 61000
        },
        "debt": {
          "min": 35000,
          "max": 141000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2420,
          "max": 4040
        },
        "pop_pct": 0.193,
        "pop_py": 124114
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 141000,
          "max": 566000
        },
        "debt": {
          "min": 25000,
          "max": 101000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2630,
          "max": 4240
        },
        "pop_pct": 0.31,
        "pop_py": 199354
      },
      "Frequent Traveler": {
        "assets": {
          "min": 202000,
          "max": 808000
        },
        "debt": {
          "min": 81000,
          "max": 323000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6060,
          "max": 10100
        },
        "pop_pct": 0.168,
        "pop_py": 108037
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 40000,
          "max": 162000
        },
        "debt": {
          "min": 25000,
          "max": 101000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2520,
          "max": 4240
        },
        "pop_pct": 0.11199999999999999,
        "pop_py": 72025
      }
    }
  },
  {
    "state_name": "Virginia",
    "state_code": "VA",
    "population": 8631393,
    "cost_index_2020": 102.05,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 210000,
          "max": 840000
        },
        "debt": {
          "min": 108000,
          "max": 430000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 700,
          "max": 770
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5200,
          "max": 8300
        },
        "pop_pct": 0.564,
        "pop_py": 4868106
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 82000,
          "max": 327000
        },
        "debt": {
          "min": 61000,
          "max": 245000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3570,
          "max": 5920
        },
        "pop_pct": 0.235,
        "pop_py": 2028377
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 510000,
          "max": 2041000
        },
        "debt": {
          "min": 102000,
          "max": 408000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 12250,
          "max": 25510
        },
        "pop_pct": 0.07200000000000001,
        "pop_py": 621460
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 122000,
          "max": 490000
        },
        "debt": {
          "min": 31000,
          "max": 122000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2860,
          "max": 4590
        },
        "pop_pct": 0.306,
        "pop_py": 2641206
      },
      "Frequent Travelers": {
        "assets": {
          "min": 204000,
          "max": 816000
        },
        "debt": {
          "min": 82000,
          "max": 327000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6120,
          "max": 10200
        },
        "pop_pct": 0.20199999999999999,
        "pop_py": 1743541
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 41000,
          "max": 163000
        },
        "debt": {
          "min": 26000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2550,
          "max": 4290
        },
        "pop_pct": 0.07,
        "pop_py": 604198
      },
      "Small Business Owners": {
        "assets": {
          "min": 255000,
          "max": 1020000
        },
        "debt": {
          "min": 153000,
          "max": 612000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5610,
          "max": 9180
        },
        "pop_pct": 0.17800000000000002,
        "pop_py": 1536388
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 31000,
          "max": 122000
        },
        "debt": {
          "min": 20000,
          "max": 82000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2860,
          "max": 4900
        },
        "pop_pct": 0.207,
        "pop_py": 1786698
      },
      "Families with Children": {
        "assets": {
          "min": 153000,
          "max": 612000
        },
        "debt": {
          "min": 102000,
          "max": 408000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5100,
          "max": 8670
        },
        "pop_pct": 0.281,
        "pop_py": 2425421
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 306000,
          "max": 1225000
        },
        "debt": {
          "min": 20000,
          "max": 82000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3270,
          "max": 5610
        },
        "pop_pct": 0.221,
        "pop_py": 1907538
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 408000,
          "max": 1633000
        },
        "debt": {
          "min": 122000,
          "max": 490000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 10200,
          "max": 20410
        },
        "pop_pct": 0.051,
        "pop_py": 440201
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 20000,
          "max": 82000
        },
        "debt": {
          "min": 15000,
          "max": 61000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2040,
          "max": 3570
        },
        "pop_pct": 0.21899999999999997,
        "pop_py": 1890275
      },
      "Digital Natives": {
        "assets": {
          "min": 36000,
          "max": 143000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3060,
          "max": 5100
        },
        "pop_pct": 0.28,
        "pop_py": 2416790
      },
      "Renters": {
        "assets": {
          "min": 26000,
          "max": 102000
        },
        "debt": {
          "min": 20000,
          "max": 82000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3270,
          "max": 5610
        },
        "pop_pct": 0.332,
        "pop_py": 2865622
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 20000
        },
        "debt": {
          "min": 10000,
          "max": 41000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1220,
          "max": 2250
        },
        "pop_pct": 0.171,
        "pop_py": 1475968
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 10000,
          "max": 41000
        },
        "debt": {
          "min": 41000,
          "max": 163000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2250,
          "max": 3880
        },
        "pop_pct": 0.248,
        "pop_py": 2140585
      },
      "At-Risk Customers": {
        "assets": {
          "min": 15000,
          "max": 61000
        },
        "debt": {
          "min": 36000,
          "max": 143000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2450,
          "max": 4080
        },
        "pop_pct": 0.266,
        "pop_py": 2295951
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 143000,
          "max": 571000
        },
        "debt": {
          "min": 26000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2650,
          "max": 4290
        },
        "pop_pct": 0.26,
        "pop_py": 2244162
      },
      "Frequent Traveler": {
        "assets": {
          "min": 204000,
          "max": 816000
        },
        "debt": {
          "min": 82000,
          "max": 327000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6120,
          "max": 10200
        },
        "pop_pct": 0.16,
        "pop_py": 1381023
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 41000,
          "max": 163000
        },
        "debt": {
          "min": 26000,
          "max": 102000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2550,
          "max": 4290
        },
        "pop_pct": 0.099,
        "pop_py": 854508
      }
    }
  },
  {
    "state_name": "Washington",
    "state_code": "WA",
    "population": 7705281,
    "cost_index_2020": 110.03,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 230000,
          "max": 920000
        },
        "debt": {
          "min": 122000,
          "max": 488000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5900,
          "max": 9200
        },
        "pop_pct": 0.5539999999999999,
        "pop_py": 4268726
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 88000,
          "max": 352000
        },
        "debt": {
          "min": 66000,
          "max": 264000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3850,
          "max": 6380
        },
        "pop_pct": 0.252,
        "pop_py": 1941731
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 550000,
          "max": 2201000
        },
        "debt": {
          "min": 110000,
          "max": 440000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 13200,
          "max": 27510
        },
        "pop_pct": 0.129,
        "pop_py": 993981
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 132000,
          "max": 528000
        },
        "debt": {
          "min": 33000,
          "max": 132000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 3080,
          "max": 4950
        },
        "pop_pct": 0.299,
        "pop_py": 2303879
      },
      "Frequent Travelers": {
        "assets": {
          "min": 220000,
          "max": 880000
        },
        "debt": {
          "min": 88000,
          "max": 352000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6600,
          "max": 11000
        },
        "pop_pct": 0.158,
        "pop_py": 1217434
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 44000,
          "max": 176000
        },
        "debt": {
          "min": 28000,
          "max": 110000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2750,
          "max": 4620
        },
        "pop_pct": 0.136,
        "pop_py": 1047918
      },
      "Small Business Owners": {
        "assets": {
          "min": 275000,
          "max": 1100000
        },
        "debt": {
          "min": 165000,
          "max": 660000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 6050,
          "max": 9900
        },
        "pop_pct": 0.17600000000000002,
        "pop_py": 1356129
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 33000,
          "max": 132000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 3080,
          "max": 5280
        },
        "pop_pct": 0.23800000000000002,
        "pop_py": 1833857
      },
      "Families with Children": {
        "assets": {
          "min": 165000,
          "max": 660000
        },
        "debt": {
          "min": 110000,
          "max": 440000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5500,
          "max": 9350
        },
        "pop_pct": 0.304,
        "pop_py": 2342405
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 330000,
          "max": 1320000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3520,
          "max": 6050
        },
        "pop_pct": 0.201,
        "pop_py": 1548761
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 440000,
          "max": 1760000
        },
        "debt": {
          "min": 132000,
          "max": 528000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 11000,
          "max": 22010
        },
        "pop_pct": 0.154,
        "pop_py": 1186613
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 22000,
          "max": 88000
        },
        "debt": {
          "min": 17000,
          "max": 66000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2200,
          "max": 3850
        },
        "pop_pct": 0.258,
        "pop_py": 1987962
      },
      "Digital Natives": {
        "assets": {
          "min": 39000,
          "max": 154000
        },
        "debt": {
          "min": 20000,
          "max": 79000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3300,
          "max": 5500
        },
        "pop_pct": 0.318,
        "pop_py": 2450279
      },
      "Renters": {
        "assets": {
          "min": 28000,
          "max": 110000
        },
        "debt": {
          "min": 22000,
          "max": 88000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3520,
          "max": 6050
        },
        "pop_pct": 0.306,
        "pop_py": 2357816
      },
      "Students 18+ Age": {
        "assets": {
          "min": 6000,
          "max": 22000
        },
        "debt": {
          "min": 11000,
          "max": 44000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1320,
          "max": 2420
        },
        "pop_pct": 0.162,
        "pop_py": 1248256
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 44000
        },
        "debt": {
          "min": 44000,
          "max": 176000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2420,
          "max": 4180
        },
        "pop_pct": 0.198,
        "pop_py": 1525646
      },
      "At-Risk Customers": {
        "assets": {
          "min": 17000,
          "max": 66000
        },
        "debt": {
          "min": 39000,
          "max": 154000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2640,
          "max": 4400
        },
        "pop_pct": 0.235,
        "pop_py": 1810741
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 154000,
          "max": 616000
        },
        "debt": {
          "min": 28000,
          "max": 110000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2860,
          "max": 4620
        },
        "pop_pct": 0.24,
        "pop_py": 1849267
      },
      "Frequent Traveler": {
        "assets": {
          "min": 220000,
          "max": 880000
        },
        "debt": {
          "min": 88000,
          "max": 352000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6600,
          "max": 11000
        },
        "pop_pct": 0.10400000000000001,
        "pop_py": 801349
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 44000,
          "max": 176000
        },
        "debt": {
          "min": 28000,
          "max": 110000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2750,
          "max": 4620
        },
        "pop_pct": 0.14300000000000002,
        "pop_py": 1101855
      }
    }
  },
  {
    "state_name": "West Virginia",
    "state_code": "WV",
    "population": 1793716,
    "cost_index_2020": 89.16,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 178000,
          "max": 712000
        },
        "debt": {
          "min": 89000,
          "max": 356000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 680,
          "max": 750
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4450,
          "max": 7120
        },
        "pop_pct": 0.5670000000000001,
        "pop_py": 1017037
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 71000,
          "max": 285000
        },
        "debt": {
          "min": 53000,
          "max": 214000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3120,
          "max": 5170
        },
        "pop_pct": 0.325,
        "pop_py": 582958
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 446000,
          "max": 1783000
        },
        "debt": {
          "min": 89000,
          "max": 357000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 10700,
          "max": 22290
        },
        "pop_pct": 0.028999999999999998,
        "pop_py": 52018
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 107000,
          "max": 428000
        },
        "debt": {
          "min": 27000,
          "max": 107000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2500,
          "max": 4010
        },
        "pop_pct": 0.349,
        "pop_py": 626007
      },
      "Frequent Travelers": {
        "assets": {
          "min": 178000,
          "max": 713000
        },
        "debt": {
          "min": 71000,
          "max": 285000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5350,
          "max": 8920
        },
        "pop_pct": 0.16399999999999998,
        "pop_py": 294169
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 36000,
          "max": 143000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2230,
          "max": 3740
        },
        "pop_pct": 0.16399999999999998,
        "pop_py": 294169
      },
      "Small Business Owners": {
        "assets": {
          "min": 223000,
          "max": 892000
        },
        "debt": {
          "min": 134000,
          "max": 535000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 4900,
          "max": 8020
        },
        "pop_pct": 0.14800000000000002,
        "pop_py": 265470
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 27000,
          "max": 107000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2500,
          "max": 4280
        },
        "pop_pct": 0.094,
        "pop_py": 168609
      },
      "Families with Children": {
        "assets": {
          "min": 134000,
          "max": 535000
        },
        "debt": {
          "min": 89000,
          "max": 357000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4460,
          "max": 7580
        },
        "pop_pct": 0.33399999999999996,
        "pop_py": 599101
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 267000,
          "max": 1070000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2850,
          "max": 4900
        },
        "pop_pct": 0.201,
        "pop_py": 360537
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 357000,
          "max": 1427000
        },
        "debt": {
          "min": 107000,
          "max": 428000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 8920,
          "max": 17830
        },
        "pop_pct": 0.028999999999999998,
        "pop_py": 52018
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 71000
        },
        "debt": {
          "min": 13000,
          "max": 53000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1780,
          "max": 3120
        },
        "pop_pct": 0.24100000000000002,
        "pop_py": 432286
      },
      "Digital Natives": {
        "assets": {
          "min": 31000,
          "max": 125000
        },
        "debt": {
          "min": 16000,
          "max": 64000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2670,
          "max": 4460
        },
        "pop_pct": 0.21600000000000003,
        "pop_py": 387443
      },
      "Renters": {
        "assets": {
          "min": 22000,
          "max": 89000
        },
        "debt": {
          "min": 18000,
          "max": 71000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2850,
          "max": 4900
        },
        "pop_pct": 0.27899999999999997,
        "pop_py": 500447
      },
      "Students 18+ Age": {
        "assets": {
          "min": 4000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 36000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1070,
          "max": 1960
        },
        "pop_pct": 0.168,
        "pop_py": 301344
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 36000
        },
        "debt": {
          "min": 36000,
          "max": 143000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 1960,
          "max": 3390
        },
        "pop_pct": 0.221,
        "pop_py": 396411
      },
      "At-Risk Customers": {
        "assets": {
          "min": 13000,
          "max": 53000
        },
        "debt": {
          "min": 31000,
          "max": 125000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2140,
          "max": 3570
        },
        "pop_pct": 0.248,
        "pop_py": 444842
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 125000,
          "max": 499000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2320,
          "max": 3740
        },
        "pop_pct": 0.28800000000000003,
        "pop_py": 516590
      },
      "Frequent Traveler": {
        "assets": {
          "min": 178000,
          "max": 713000
        },
        "debt": {
          "min": 71000,
          "max": 285000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5350,
          "max": 8920
        },
        "pop_pct": 0.133,
        "pop_py": 238564
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 36000,
          "max": 143000
        },
        "debt": {
          "min": 22000,
          "max": 89000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2230,
          "max": 3740
        },
        "pop_pct": 0.10800000000000001,
        "pop_py": 193721
      }
    }
  },
  {
    "state_name": "Wisconsin",
    "state_code": "WI",
    "population": 5893718,
    "cost_index_2020": 92.42,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 187000,
          "max": 748000
        },
        "debt": {
          "min": 93500,
          "max": 374000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4680,
          "max": 7480
        },
        "pop_pct": 0.665,
        "pop_py": 3919322
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 74000,
          "max": 296000
        },
        "debt": {
          "min": 55000,
          "max": 222000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3230,
          "max": 5360
        },
        "pop_pct": 0.27399999999999997,
        "pop_py": 1614879
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 462000,
          "max": 1848000
        },
        "debt": {
          "min": 92000,
          "max": 370000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11090,
          "max": 23100
        },
        "pop_pct": 0.042,
        "pop_py": 247536
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 111000,
          "max": 444000
        },
        "debt": {
          "min": 28000,
          "max": 111000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2590,
          "max": 4160
        },
        "pop_pct": 0.34700000000000003,
        "pop_py": 2045120
      },
      "Frequent Travelers": {
        "assets": {
          "min": 185000,
          "max": 739000
        },
        "debt": {
          "min": 74000,
          "max": 296000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5550,
          "max": 9240
        },
        "pop_pct": 0.13,
        "pop_py": 766183
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 37000,
          "max": 148000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2310,
          "max": 3880
        },
        "pop_pct": 0.19699999999999998,
        "pop_py": 1161062
      },
      "Small Business Owners": {
        "assets": {
          "min": 231000,
          "max": 924000
        },
        "debt": {
          "min": 139000,
          "max": 555000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5080,
          "max": 8320
        },
        "pop_pct": 0.156,
        "pop_py": 919420
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 111000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2590,
          "max": 4440
        },
        "pop_pct": 0.16699999999999998,
        "pop_py": 984251
      },
      "Families with Children": {
        "assets": {
          "min": 139000,
          "max": 555000
        },
        "debt": {
          "min": 92000,
          "max": 370000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4620,
          "max": 7860
        },
        "pop_pct": 0.381,
        "pop_py": 2245507
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 277000,
          "max": 1109000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2960,
          "max": 5080
        },
        "pop_pct": 0.23600000000000002,
        "pop_py": 1390917
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 370000,
          "max": 1479000
        },
        "debt": {
          "min": 111000,
          "max": 444000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9240,
          "max": 18480
        },
        "pop_pct": 0.077,
        "pop_py": 453816
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 74000
        },
        "debt": {
          "min": 14000,
          "max": 55000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1850,
          "max": 3230
        },
        "pop_pct": 0.21100000000000002,
        "pop_py": 1243574
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 129000
        },
        "debt": {
          "min": 17000,
          "max": 67000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2770,
          "max": 4620
        },
        "pop_pct": 0.204,
        "pop_py": 1202318
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 92000
        },
        "debt": {
          "min": 18000,
          "max": 74000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2960,
          "max": 5080
        },
        "pop_pct": 0.264,
        "pop_py": 1555942
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 37000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1110,
          "max": 2030
        },
        "pop_pct": 0.14800000000000002,
        "pop_py": 872270
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 37000
        },
        "debt": {
          "min": 37000,
          "max": 148000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2030,
          "max": 3510
        },
        "pop_pct": 0.185,
        "pop_py": 1090338
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 55000
        },
        "debt": {
          "min": 32000,
          "max": 129000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2220,
          "max": 3700
        },
        "pop_pct": 0.218,
        "pop_py": 1284831
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 129000,
          "max": 518000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2400,
          "max": 3880
        },
        "pop_pct": 0.248,
        "pop_py": 1461642
      },
      "Frequent Traveler": {
        "assets": {
          "min": 185000,
          "max": 739000
        },
        "debt": {
          "min": 74000,
          "max": 296000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5550,
          "max": 9240
        },
        "pop_pct": 0.111,
        "pop_py": 654203
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 37000,
          "max": 148000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2310,
          "max": 3880
        },
        "pop_pct": 0.172,
        "pop_py": 1013719
      }
    }
  },
  {
    "state_name": "Wyoming",
    "state_code": "WY",
    "population": 576851,
    "cost_index_2020": 91.76,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 185000,
          "max": 740000
        },
        "debt": {
          "min": 92000,
          "max": 370000
        },
        "debt_to_income_ratio": 0.34,
        "credit_score": {
          "min": 690,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 4600,
          "max": 7400
        },
        "pop_pct": 0.652,
        "pop_py": 376107
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 73000,
          "max": 294000
        },
        "debt": {
          "min": 55000,
          "max": 220000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3210,
          "max": 5320
        },
        "pop_pct": 0.285,
        "pop_py": 164403
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 459000,
          "max": 1835000
        },
        "debt": {
          "min": 92000,
          "max": 367000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 11010,
          "max": 22940
        },
        "pop_pct": 0.033,
        "pop_py": 19036
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 110000,
          "max": 440000
        },
        "debt": {
          "min": 28000,
          "max": 110000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4130
        },
        "pop_pct": 0.34600000000000003,
        "pop_py": 199590
      },
      "Frequent Travelers": {
        "assets": {
          "min": 184000,
          "max": 734000
        },
        "debt": {
          "min": 73000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9180
        },
        "pop_pct": 0.135,
        "pop_py": 77875
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2290,
          "max": 3850
        },
        "pop_pct": 0.175,
        "pop_py": 100949
      },
      "Small Business Owners": {
        "assets": {
          "min": 229000,
          "max": 918000
        },
        "debt": {
          "min": 138000,
          "max": 551000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 5050,
          "max": 8260
        },
        "pop_pct": 0.201,
        "pop_py": 115947
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 28000,
          "max": 110000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 2570,
          "max": 4400
        },
        "pop_pct": 0.135,
        "pop_py": 77875
      },
      "Families with Children": {
        "assets": {
          "min": 138000,
          "max": 551000
        },
        "debt": {
          "min": 92000,
          "max": 367000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 4590,
          "max": 7800
        },
        "pop_pct": 0.311,
        "pop_py": 179401
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 275000,
          "max": 1101000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.122,
        "pop_py": 70376
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 367000,
          "max": 1468000
        },
        "debt": {
          "min": 110000,
          "max": 440000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 9180,
          "max": 18350
        },
        "pop_pct": 0.013999999999999999,
        "pop_py": 8076
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 18000,
          "max": 73000
        },
        "debt": {
          "min": 14000,
          "max": 55000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 1840,
          "max": 3210
        },
        "pop_pct": 0.192,
        "pop_py": 110755
      },
      "Digital Natives": {
        "assets": {
          "min": 32000,
          "max": 128000
        },
        "debt": {
          "min": 17000,
          "max": 66000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2750,
          "max": 4590
        },
        "pop_pct": 0.22899999999999998,
        "pop_py": 132099
      },
      "Renters": {
        "assets": {
          "min": 23000,
          "max": 92000
        },
        "debt": {
          "min": 18000,
          "max": 73000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 2940,
          "max": 5050
        },
        "pop_pct": 0.271,
        "pop_py": 156327
      },
      "Students 18+ Age": {
        "assets": {
          "min": 5000,
          "max": 18000
        },
        "debt": {
          "min": 9000,
          "max": 37000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1100,
          "max": 2020
        },
        "pop_pct": 0.149,
        "pop_py": 85951
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 9000,
          "max": 37000
        },
        "debt": {
          "min": 37000,
          "max": 147000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2020,
          "max": 3490
        },
        "pop_pct": 0.321,
        "pop_py": 185169
      },
      "At-Risk Customers": {
        "assets": {
          "min": 14000,
          "max": 55000
        },
        "debt": {
          "min": 32000,
          "max": 128000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2200,
          "max": 3670
        },
        "pop_pct": 0.14400000000000002,
        "pop_py": 83067
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 128000,
          "max": 514000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2390,
          "max": 3850
        },
        "pop_pct": 0.316,
        "pop_py": 182285
      },
      "Frequent Traveler": {
        "assets": {
          "min": 184000,
          "max": 734000
        },
        "debt": {
          "min": 73000,
          "max": 294000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 5510,
          "max": 9180
        },
        "pop_pct": 0.081,
        "pop_py": 46725
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 37000,
          "max": 147000
        },
        "debt": {
          "min": 23000,
          "max": 92000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2290,
          "max": 3850
        },
        "pop_pct": 0.133,
        "pop_py": 76721
      }
    }
  },
  {
    "state_name": "District of Columbia",
    "state_code": "DC",
    "population": 689545,
    "cost_index_2020": 112.66,
    "personas": {
      "Homeowners": {
        "assets": {
          "min": 238000,
          "max": 952000
        },
        "debt": {
          "min": 126000,
          "max": 504000
        },
        "debt_to_income_ratio": 0.29,
        "credit_score": {
          "min": 715,
          "max": 785
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6200,
          "max": 9800
        },
        "pop_pct": 0.569,
        "pop_py": 392351
      },
      "First-Time Homebuyer": {
        "assets": {
          "min": 90000,
          "max": 361000
        },
        "debt": {
          "min": 68000,
          "max": 270000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 650,
          "max": 720
        },
        "age_group": {
          "min": 25,
          "max": 40
        },
        "monthly_spend": {
          "min": 3940,
          "max": 6530
        },
        "pop_pct": 0.271,
        "pop_py": 186867
      },
      "High Net Worth Individual (HNWI)": {
        "assets": {
          "min": 563000,
          "max": 2253000
        },
        "debt": {
          "min": 113000,
          "max": 451000
        },
        "debt_to_income_ratio": 0.15,
        "credit_score": {
          "min": 760,
          "max": 850
        },
        "age_group": {
          "min": 40,
          "max": 70
        },
        "monthly_spend": {
          "min": 13520,
          "max": 28160
        },
        "pop_pct": 0.08900000000000001,
        "pop_py": 61370
      },
      "Budget-Conscious Savers": {
        "assets": {
          "min": 135000,
          "max": 541000
        },
        "debt": {
          "min": 34000,
          "max": 135000
        },
        "debt_to_income_ratio": 0.2,
        "credit_score": {
          "min": 720,
          "max": 790
        },
        "age_group": {
          "min": 28,
          "max": 60
        },
        "monthly_spend": {
          "min": 3150,
          "max": 5070
        },
        "pop_pct": 0.271,
        "pop_py": 186867
      },
      "Frequent Travelers": {
        "assets": {
          "min": 225000,
          "max": 901000
        },
        "debt": {
          "min": 90000,
          "max": 361000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6760,
          "max": 11270
        },
        "pop_pct": 0.21600000000000003,
        "pop_py": 148942
      },
      "Gig Economy Workers": {
        "assets": {
          "min": 45000,
          "max": 180000
        },
        "debt": {
          "min": 28000,
          "max": 113000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2820,
          "max": 4730
        },
        "pop_pct": 0.147,
        "pop_py": 101363
      },
      "Small Business Owners": {
        "assets": {
          "min": 282000,
          "max": 1127000
        },
        "debt": {
          "min": 169000,
          "max": 676000
        },
        "debt_to_income_ratio": 0.38,
        "credit_score": {
          "min": 680,
          "max": 760
        },
        "age_group": {
          "min": 30,
          "max": 60
        },
        "monthly_spend": {
          "min": 6200,
          "max": 10140
        },
        "pop_pct": 0.207,
        "pop_py": 142736
      },
      "Young Professionals / First Jobbers": {
        "assets": {
          "min": 34000,
          "max": 135000
        },
        "debt": {
          "min": 23000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.32,
        "credit_score": {
          "min": 660,
          "max": 730
        },
        "age_group": {
          "min": 22,
          "max": 32
        },
        "monthly_spend": {
          "min": 3150,
          "max": 5410
        },
        "pop_pct": 0.21899999999999997,
        "pop_py": 151010
      },
      "Families with Children": {
        "assets": {
          "min": 169000,
          "max": 676000
        },
        "debt": {
          "min": 113000,
          "max": 451000
        },
        "debt_to_income_ratio": 0.36,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 28,
          "max": 50
        },
        "monthly_spend": {
          "min": 5630,
          "max": 9580
        },
        "pop_pct": 0.318,
        "pop_py": 219275
      },
      "Retirees / Fixed Income": {
        "assets": {
          "min": 338000,
          "max": 1352000
        },
        "debt": {
          "min": 23000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.12,
        "credit_score": {
          "min": 740,
          "max": 810
        },
        "age_group": {
          "min": 62,
          "max": 80
        },
        "monthly_spend": {
          "min": 3610,
          "max": 6200
        },
        "pop_pct": 0.247,
        "pop_py": 170318
      },
      "Luxury Lifestyle Consumers": {
        "assets": {
          "min": 451000,
          "max": 1803000
        },
        "debt": {
          "min": 135000,
          "max": 541000
        },
        "debt_to_income_ratio": 0.22,
        "credit_score": {
          "min": 750,
          "max": 830
        },
        "age_group": {
          "min": 35,
          "max": 60
        },
        "monthly_spend": {
          "min": 11270,
          "max": 22530
        },
        "pop_pct": 0.16899999999999998,
        "pop_py": 116533
      },
      "Credit Seekers / Builders": {
        "assets": {
          "min": 23000,
          "max": 90000
        },
        "debt": {
          "min": 17000,
          "max": 68000
        },
        "debt_to_income_ratio": 0.42,
        "credit_score": {
          "min": 580,
          "max": 660
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 2250,
          "max": 3940
        },
        "pop_pct": 0.24,
        "pop_py": 165491
      },
      "Digital Natives": {
        "assets": {
          "min": 39000,
          "max": 158000
        },
        "debt": {
          "min": 20000,
          "max": 81000
        },
        "debt_to_income_ratio": 0.3,
        "credit_score": {
          "min": 670,
          "max": 740
        },
        "age_group": {
          "min": 20,
          "max": 35
        },
        "monthly_spend": {
          "min": 3380,
          "max": 5630
        },
        "pop_pct": 0.287,
        "pop_py": 197899
      },
      "Renters": {
        "assets": {
          "min": 28000,
          "max": 113000
        },
        "debt": {
          "min": 23000,
          "max": 90000
        },
        "debt_to_income_ratio": 0.35,
        "credit_score": {
          "min": 640,
          "max": 720
        },
        "age_group": {
          "min": 22,
          "max": 45
        },
        "monthly_spend": {
          "min": 3610,
          "max": 6200
        },
        "pop_pct": 0.348,
        "pop_py": 239962
      },
      "Students 18+ Age": {
        "assets": {
          "min": 6000,
          "max": 23000
        },
        "debt": {
          "min": 11000,
          "max": 45000
        },
        "debt_to_income_ratio": 0.45,
        "credit_score": {
          "min": 600,
          "max": 680
        },
        "age_group": {
          "min": 18,
          "max": 25
        },
        "monthly_spend": {
          "min": 1350,
          "max": 2480
        },
        "pop_pct": 0.221,
        "pop_py": 152389
      },
      "Financially Distressed Customers": {
        "assets": {
          "min": 11000,
          "max": 45000
        },
        "debt": {
          "min": 45000,
          "max": 180000
        },
        "debt_to_income_ratio": 0.55,
        "credit_score": {
          "min": 520,
          "max": 620
        },
        "age_group": {
          "min": 25,
          "max": 60
        },
        "monthly_spend": {
          "min": 2480,
          "max": 4280
        },
        "pop_pct": 0.22399999999999998,
        "pop_py": 154458
      },
      "At-Risk Customers": {
        "assets": {
          "min": 17000,
          "max": 68000
        },
        "debt": {
          "min": 39000,
          "max": 158000
        },
        "debt_to_income_ratio": 0.5,
        "credit_score": {
          "min": 550,
          "max": 640
        },
        "age_group": {
          "min": 25,
          "max": 55
        },
        "monthly_spend": {
          "min": 2700,
          "max": 4510
        },
        "pop_pct": 0.168,
        "pop_py": 115844
      },
      "Conservative / Budget‑Conscious Saver": {
        "assets": {
          "min": 158000,
          "max": 631000
        },
        "debt": {
          "min": 28000,
          "max": 113000
        },
        "debt_to_income_ratio": 0.18,
        "credit_score": {
          "min": 730,
          "max": 800
        },
        "age_group": {
          "min": 30,
          "max": 65
        },
        "monthly_spend": {
          "min": 2930,
          "max": 4730
        },
        "pop_pct": 0.365,
        "pop_py": 251684
      },
      "Frequent Traveler": {
        "assets": {
          "min": 225000,
          "max": 901000
        },
        "debt": {
          "min": 90000,
          "max": 361000
        },
        "debt_to_income_ratio": 0.28,
        "credit_score": {
          "min": 710,
          "max": 780
        },
        "age_group": {
          "min": 30,
          "max": 55
        },
        "monthly_spend": {
          "min": 6760,
          "max": 11270
        },
        "pop_pct": 0.165,
        "pop_py": 113775
      },
      "Gig Economy Worker": {
        "assets": {
          "min": 45000,
          "max": 180000
        },
        "debt": {
          "min": 28000,
          "max": 113000
        },
        "debt_to_income_ratio": 0.4,
        "credit_score": {
          "min": 620,
          "max": 700
        },
        "age_group": {
          "min": 22,
          "max": 40
        },
        "monthly_spend": {
          "min": 2820,
          "max": 4730
        },
        "pop_pct": 0.08199999999999999,
        "pop_py": 56543
      }
    }
  }
]
;
