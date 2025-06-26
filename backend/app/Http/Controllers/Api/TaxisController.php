<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\TaxisRepositoryInterface;

class TaxisController extends Controller
{
    protected TaxisRepositoryInterface $taxisRepository;
    protected Request $request;

    public function __construct(TaxisRepositoryInterface $taxisRepository, Request $request)
    {
        $this->taxisRepository = $taxisRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->taxisRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="taxis.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_taxi','id_taxista','licencia_taxi','tipo','preferencias','matricula','marca','modelo','color',
        'año','ubicacion_actual',

      'ultima_actualizacion',
        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_taxi'],$row['id_taxista'],$row['licencia_taxi'],$row['tipo'],$row['preferencias'],$row['matricula'],$row['marca'],$row['modelo'],$row['color'],
        $row['año'],$row['ubicacion_actual'],

      $row['ultima_actualizacion'],
        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->taxisRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->taxisRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->taxisRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->taxisRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->taxisRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->taxisRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

